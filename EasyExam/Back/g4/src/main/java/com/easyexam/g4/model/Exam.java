package com.easyexam.g4.model;

import java.util.*;
import javax.persistence.*;
import java.io.*;
import java.lang.ProcessBuilder;
import java.io.IOException;
import java.io.BufferedInputStream;


@Entity
public class Exam {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    //Todo en el front.nueva adicion
    List<Integer> points;
    String college;
    String course;
    String rules;
    String specs;
    String title;
    Date creation_date;
    Date exam_date;
    int max_points;
    int question_number;

    @ManyToOne
    Teacher creator;

    @ManyToMany
    @JoinTable(
            name = "question_exam",
            joinColumns = @JoinColumn(name = "exam_id"),
            inverseJoinColumns = @JoinColumn(name = "question_id")
    )
    List<Question> questions;

    public Exam() {
    }

    public Exam(String college, String course, String rules, String specs, String title, Date creation_date, Date exam_date, int max_points, int question_number, Teacher creator, List<Question> questions) {
        this.college = college;
        this.course = course;
        this.rules = rules;
        this.specs = specs;
        this.title = title;
        this.creation_date = creation_date;
        this.exam_date = exam_date;
        this.max_points = max_points;
        this.question_number = question_number;
        this.creator = creator;
        this.questions = questions;
    }
    public static void compileTex(String name) throws IOException, InterruptedException {
        // compilation.sh va a buscar tu archivo y compilarlo con livetex

        ProcessBuilder processBuilder = new ProcessBuilder("pdflatex", name);
        processBuilder.inheritIO();
        Process process = processBuilder.start();

        int exitValue = process.waitFor();
        if (exitValue != 0) {
            // check for errors
            new BufferedInputStream(process.getErrorStream());
            throw new RuntimeException("execution of script failed!");
        }
    }

    public String getCollege() {
        return college;
    }

    public void setCollege(String college) {
        this.college = college;
    }

    public String getCourse() {
        return course;
    }

    public void setCourse(String course) {
        this.course = course;
    }

    public String getRules() {
        return rules;
    }

    public void setRules(String rules) {
        this.rules = rules;
    }

    public String getSpecs() {
        return specs;
    }

    public void setSpecs(String specs) {
        this.specs = specs;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Date getCreation_date() {
        return creation_date;
    }

    public void setCreation_date(Date creation_date) {
        this.creation_date = creation_date;
    }

    public Date getExam_date() {
        return exam_date;
    }

    public void setExam_date(Date exam_date) {
        this.exam_date = exam_date;
    }

    public int getMax_points() {
        return max_points;
    }

    public void setMax_points(int max_points) {
        this.max_points = max_points;
    }

    public int getQuestion_number() {
        return question_number;
    }

    public void setQuestion_number(int question_number) {
        this.question_number = question_number;
    }

    public Teacher getCreator() {
        return creator;
    }

    public void setCreator(Teacher creator) {
        this.creator = creator;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }
//TODO: mayencourt.sty y retornar url
public void cook(Boolean solucionario) {
    String filename = this.id + "test.tex";
    Integer num_questions = questions.size();
    try {
        BufferedWriter writer = new BufferedWriter(new FileWriter(filename));
        String boilerplateStart = "\\documentclass[12pt, addpoints]{exam}\\usepackage{mayencourt}\\usepackage{xpatch}\\xapptocmd{\\@item}{\\label{en:\\arabic{page}\\alph{enumi}}}{}{}\\pgfplotsset{compat=1.15}\\usetikzlibrary{patterns}\\pagestyle{headandfoot}\\extraheadheight{1cm}\\runningheadrule\\firstpageheader{\\huge \\textbf{"
                + this.college
                + "}}                {    \\textbf{ Course : \\\\                      Date:\\\\                      Number of questions :\\\\                      "
                + this.course + "}                 }                {   \\textbf{" + this.course
                + "\\\\                    " + this.exam_date + "\\\\                    " + this.question_number
                + "\\\\                    Points: " + this.max_points + "}}\\runningheader{\\huge \\textbf{"
                + this.college
                + "}}                {    \\textbf{ Course : \\\\                      Date:\\\\                      Number of questions :\\\\                      "
                + this.course + "}                 }                {   \\textbf{" + this.title
                + "\\\\                    " + this.exam_date + "\\\\                    " + this.question_number
                + "\\\\                    Points: " + this.max_points
                + "}}\\begin{document}\\printanswers\\vspace{5cm}\\begin{center}\\begin{tabular}{|l|l|}\\hline&\\\\\\makebox[0.4\\textwidth]{Name : \\enspace\\hrulefill}    & \\makebox[0.4\\textwidth]{Student code : \\enspace\\hrulefill}  \\\\&\\\\\\makebox[0.4\\textwidth]{Surnames : \\enspace\\hrulefill}     & \\makebox[0.4\\textwidth]{Major : \\enspace\\hrulefill}\\\\&\\\\\\hline\\end{tabular}\\end{center}\\vspace{5cm}";
        // hasta el begin itemize
        String sign_here = "\\vspace{5cm}\\begin{tabular}{ll}Signatures : & \\makebox[0.4\\textwidth]{ \\enspace\\hrulefill}	\\\\&\\\\&\\\\& \\makebox[0.4\\textwidth]{ \\enspace\\hrulefill}\\\\\\end{tabular}\\newpage";
        writer.write(boilerplateStart);
        writer.write(sign_here);
        writer.write("\\vspace{3cm}\\textbf{Instructions :}");
        writer.write(this.rules);
        writer.write("\\newpage");

        writer.write("\\begin{questions}");
        for (int i = 0; i < num_questions; i++) {
            Question current = questions.get(i);
            String buffer = "\\question" + '[' + points.get(i) + "] " + current.getTitle() + "\\newline "
                    + current.getDescription();
            writer.write(buffer);
            if (solucionario) {
                String answerBuffer = current.getAnswer();

                writer.write("\\newline " + "Answer:" + "\\newline " + answerBuffer);
            }
            writer.write("\\newpage ");
        }

        writer.write("\\textbf{Resources:}" + this.getSpecs() + "\\newpage");
        // original write solution loop. Instead we went for a separate pdf
        // writer.write("\\begin{solution}");
        // for (int j = 0; j < num_questions; j++) {
        // Question curr = questions.get(j);
        // String buffer2 = "\\item " + curr.getAnswer();
        // writer.write(buffer2);
        // }
        // ;
        // writer.write("\\end{solution}");
        writer.write("\\end{questions}");
        writer.write("\\end{document}");
        writer.close();

    } catch (IOException e) {
    }
    try {
        // compile the generated tex file
        compileTex(filename);
    } catch (IOException e) {
        e.printStackTrace();
    } catch (InterruptedException e) {
        e.printStackTrace();
    }

}
}
