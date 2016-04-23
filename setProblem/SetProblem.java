import static org.apache.commons.io.FileUtils.*;

import java.io.*;
import java.util.*;

public class SetProblem {
	String title, description, input, output;

	public SetProblem() throws IOException {
		Random ran = new Random();
		String file = readFileToString(new File("Problems.txt"));
		String[] problems = file.split("±");
		int ranInt = ran.nextInt(problems.length - 1);
		String[] problemsFields = problems[ranInt].split("ç");
		title = problemsFields[0];
		description = "Description:\n" + problemsFields[1];
		input = "Input:\n" + problemsFields[2];
		output = "Output:\n" + problemsFields[3];
	}

	public String getTitle() {
		return title;
	}
	
	public String getDescription(){
		return description;
	}
	
	public String getInput(){
		return input;
	}

	public String getOutput(){
		return output;
	}
}