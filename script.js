
      document.addEventListener("DOMContentLoaded", () => {
        // Java Programs Data
        const programs = [
          {
            id: 1,
            category: "basic",
            title: "Reverse a String",
            code: `public class ReverseString {
    public static void main(String[] args) {
        String str = "Automation";
        StringBuilder reversed = new StringBuilder(str).reverse();
        System.out.println(reversed);
    }
}`,
            output: "noitamotuA"
          },
          {
            id: 2,
            category: "basic",
            title: "Check for Palindrome",
            code: `public class Palindrome {
    public static void main(String[] args) {
        String str = "madam";
        String reversed = new StringBuilder(str).reverse().toString();
        System.out.println(str.equals(reversed));
    }
}`,
            output: "true"
          },
          {
            id: 3,
            category: "basic",
            title: "Fibonacci Series",
            code: `public class Fibonacci {
    public static void main(String[] args) {
        int n = 10, num1 = 0, num2 = 1;
        System.out.print("Fibonacci Series: " + num1 + ", " + num2);
        for (int i = 2; i < n; i++) {
            int num3 = num1 + num2;
            System.out.print(", " + num3);
            num1 = num2;
            num2 = num3;
        }
    }
}`,
            output: "Fibonacci Series: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34"
          },
          {
            id: 4,
            category: "basic",
            title: "Factorial of a Number",
            code: `public class Factorial {
    public static void main(String[] args) {
        int num = 5, factorial = 1;
        for (int i = 1; i <= num; i++) {
            factorial *= i;
        }
        System.out.println(factorial);
    }
}`,
            output: "120"
          },
          {
            id: 5,
            category: "basic",
            title: "Prime Number Check",
            code: `public class PrimeCheck {
    public static void main(String[] args) {
        int num = 11;
        boolean isPrime = true;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        System.out.println(isPrime);
    }
}`,
            output: "true"
          },
          {
            id: 6,
            category: "basic",
            title: "Count Vowels and Consonants",
            code: `public class VowelConsonantCount {
    public static void main(String[] args) {
        String str = "Automation";
        int vowels = 0, consonants = 0;
        for (char c : str.toCharArray()) {
            if ("aeiouAEIOU".indexOf(c) != -1) {
                vowels++;
            } else if (Character.isLetter(c)) {
                consonants++;
            }
        }
        System.out.println("Vowels: " + vowels + ", Consonants: " + consonants);
    }
}`,
            output: "Vowels: 5, Consonants: 5"
          },
          {
            id: 7,
            category: "intermediate",
            title: "Sort an Array",
            code: `import java.util.Arrays;
public class SortArray {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 3};
        Arrays.sort(arr);
        System.out.println(Arrays.toString(arr));
    }
}`,
            output: "[1, 2, 3, 5, 8]"
          },
          {
            id: 8,
            category: "intermediate",
            title: "Merge Two Arrays",
            code: `import java.util.Arrays;
public class MergeArrays {
    public static void main(String[] args) {
        int[] arr1 = {1, 3, 5};
        int[] arr2 = {2, 4, 6};
        int[] merged = new int[arr1.length + arr2.length];
        System.arraycopy(arr1, 0, merged, 0, arr1.length);
        System.arraycopy(arr2, 0, merged, arr1.length, arr2.length);
        System.out.println(Arrays.toString(merged));
    }
}`,
            output: "[1, 3, 5, 2, 4, 6]"
          },
          {
            id: 9,
            category: "intermediate",
            title: "Find the Largest Element in an Array",
            code: `public class LargestInArray {
    public static void main(String[] args) {
        int[] arr = {1, 3, 5, 7, 9};
        int largest = arr[0];
        for (int num : arr) {
            if (num > largest) {
                largest = num;
            }
        }
        System.out.println(largest);
    }
}`,
            output: "9"
          },
          {
            id: 10,
            category: "intermediate",
            title: "Remove Duplicates from an Array",
            code: `import java.util.HashSet;
public class RemoveDuplicates {
    public static void main(String[] args) {
        int[] arr = {1, 2, 2, 3, 4, 4};
        HashSet<Integer> set = new HashSet<>();
        for (int num : arr) {
            set.add(num);
        }
        System.out.println(set);
    }
}`,
            output: "[1, 2, 3, 4]"
          },
          {
            id: 11,
            category: "basic",
            title: "Check if a Number is Armstrong",
            code: `public class ArmstrongNumber {
    public static void main(String[] args) {
        int num = 153, sum = 0, temp = num;
        while (temp != 0) {
            int digit = temp % 10;
            sum += Math.pow(digit, 3);
            temp /= 10;
        }
        System.out.println(num == sum);
    }
}`,
            output: "true"
          },
          {
            id: 12,
            category: "basic",
            title: "Reverse a Number",
            code: `public class ReverseNumber {
    public static void main(String[] args) {
        int num = 12345, reversed = 0;
        while (num != 0) {
            reversed = reversed * 10 + num % 10;
            num /= 10;
        }
        System.out.println(reversed);
    }
}`,
            output: "54321"
          },
          {
            id: 13,
            category: "intermediate",
            title: "Calculate GCD of Two Numbers",
            code: `public class GCD {
    public static void main(String[] args) {
        int a = 60, b = 48;
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        System.out.println(a);
    }
}`,
            output: "12"
          },
          {
            id: 14,
            category: "intermediate",
            title: "Check for Anagram",
            code: `import java.util.Arrays;
public class AnagramCheck {
    public static void main(String[] args) {
        String str1 = "listen", str2 = "silent";
        char[] arr1 = str1.toCharArray();
        char[] arr2 = str2.toCharArray();
        Arrays.sort(arr1);
        Arrays.sort(arr2);
        System.out.println(Arrays.equals(arr1, arr2));
    }
}`,
            output: "true"
          },
          {
            id: 15,
            category: "basic",
            title: "Count the Number of Digits in a Number",
            code: `public class CountDigits {
    public static void main(String[] args) {
        int num = 12345;
        int count = String.valueOf(num).length();
        System.out.println(count);
    }
}`,
            output: "5"
          },
          {
            id: 16,
            category: "intermediate",
            title: "Print the Prime Numbers in a Range",
            code: `public class PrimeInRange {
    public static void main(String[] args) {
        int start = 10, end = 50;
        for (int num = start; num <= end; num++) {
            boolean isPrime = true;
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime && num > 1) {
                System.out.print(num + " ");
            }
        }
    }
}`,
            output: "11 13 17 19 23 29 31 37 41 43 47"
          },
          {
            id: 17,
            category: "intermediate",
            title: "Find the Second Largest Element in an Array",
            code: `public class SecondLargest {
    public static void main(String[] args) {
        int[] arr = {12, 35, 1, 10, 34, 1};
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num != first) {
                second = num;
            }
        }
        System.out.println(second);
    }
}`,
            output: "34"
          },
          {
            id: 18,
            category: "basic",
            title: "Swap Two Numbers",
            code: `public class SwapNumbers {
    public static void main(String[] args) {
        int a = 5, b = 10;
        a = a + b;
        b = a - b;
        a = a - b;
        System.out.println("a: " + a + ", b: " + b);
    }
}`,
            output: "a: 10, b: 5"
          },
          {
            id: 19,
            category: "advanced",
            title: "Print the Pascal's Triangle",
            code: `public class PascalsTriangle {
    public static void main(String[] args) {
        int rows = 5;
        for (int i = 0; i < rows; i++) {
            int num = 1;
            System.out.format("%" + (rows - i) * 2 + "s", "");
            for (int j = 0; j <= i; j++) {
                System.out.format("%4d", num);
                num = num * (i - j) / (j + 1);
            }
            System.out.println();
        }
    }
}`,
            output: "          1\n        1   1\n      1   2   1\n    1   3   3   1\n  1   4   6   4   1"
          },
          {
            id: 20,
            category: "intermediate",
            title: "Find the Missing Number in an Array",
            code: `public class MissingNumber {
    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 5, 6};
        int n = arr.length + 1;
        int total = n * (n + 1) / 2;
        for (int num : arr) {
            total -= num;
        }
        System.out.println(total);
    }
}`,
            output: "3"
          },
          {
            id: 21,
            category: "basic",
            title: "Convert Decimal to Binary",
            code: `public class DecimalToBinary {
    public static void main(String[] args) {
        int num = 10;
        String binary = Integer.toBinaryString(num);
        System.out.println(binary);
    }
}`,
            output: "1010"
          },
          {
            id: 22,
            category: "intermediate",
            title: "Check for Perfect Number",
            code: `public class PerfectNumber {
    public static void main(String[] args) {
        int num = 28, sum = 0;
        for (int i = 1; i <= num / 2; i++) {
            if (num % i == 0) {
                sum += i;
            }
        }
        System.out.println(num == sum);
    }
}`,
            output: "true"
          },
          {
            id: 23,
            category: "intermediate",
            title: "Implementing a Simple Calculator",
            code: `import java.util.Scanner;
public class SimpleCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter first number: ");
        double num1 = scanner.nextDouble();
        System.out.print("Enter second number: ");
        double num2 = scanner.nextDouble();
        System.out.print("Enter operation (+, -, *, /): ");
        char operation = scanner.next().charAt(0);
        double result;
        switch (operation) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': result = num1 / num2; break;
            default: throw new IllegalArgumentException("Invalid operation");
        }
        System.out.println("Result: " + result);
    }
}`,
            output: "Interactive calculator - depends on user input"
          },
          {
            id: 24,
            category: "basic",
            title: "Find the Sum of Digits of a Number",
            code: `public class SumOfDigits {
    public static void main(String[] args) {
        int num = 12345, sum = 0;
        while (num != 0) {
            sum += num % 10;
            num /= 10;
        }
        System.out.println(sum);
    }
}`,
            output: "15"
          },
          {
            id: 25,
            category: "basic",
            title: "Find the Length of a String",
            code: `public class StringLength {
    public static void main(String[] args) {
        String str = "Automation";
        System.out.println(str.length());
    }
}`,
            output: "10"
          },
          {
            id: 26,
            category: "basic",
            title: "Check if a String is Empty",
            code: `public class CheckEmptyString {
    public static void main(String[] args) {
        String str = "";
        System.out.println(str.isEmpty());
    }
}`,
            output: "true"
          },
          {
            id: 27,
            category: "basic",
            title: "Count the Occurrences of a Character in a String",
            code: `public class CountCharacter {
    public static void main(String[] args) {
        String str = "Automation";
        char ch = 'a';
        int count = 0;
        for (char c : str.toCharArray()) {
            if (c == ch) count++;
        }
        System.out.println(count);
    }
}`,
            output: "1"
          },
          {
            id: 28,
            category: "intermediate",
            title: "Find the First Non-Repeated Character in a String",
            code: `import java.util.LinkedHashMap;
import java.util.Map;
public class FirstNonRepeatedCharacter {
    public static void main(String[] args) {
        String str = "swiss";
        Map<Character, Integer> charCount = new LinkedHashMap<>();
        for (char c : str.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }
        for (Map.Entry<Character, Integer> entry : charCount.entrySet()) {
            if (entry.getValue() == 1) {
                System.out.println(entry.getKey());
                break;
            }
        }
    }
}`,
            output: "w"
          },
          {
            id: 29,
            category: "basic",
            title: "Remove All Whitespaces from a String",
            code: `public class RemoveWhitespaces {
    public static void main(String[] args) {
        String str = " A u t o m a t i o n ";
        String result = str.replaceAll("\\\\s+", "");
        System.out.println(result);
    }
}`,
            output: "Automation"
          },
          {
            id: 30,
            category: "intermediate",
            title: "Find the Common Elements in Two Arrays",
            code: `import java.util.HashSet;
public class CommonElements {
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4};
        int[] arr2 = {3, 4, 5, 6};
        HashSet<Integer> set = new HashSet<>();
        for (int num : arr1) {
            set.add(num);
        }
        for (int num : arr2) {
            if (set.contains(num)) {
                System.out.print(num + " ");
            }
        }
    }
}`,
            output: "3 4"
          },
          {
            id: 31,
            category: "advanced",
            title: "Find the Factorial of a Number using Recursion",
            code: `public class FactorialRecursion {
    public static void main(String[] args) {
        int num = 5;
        System.out.println(factorial(num));
    }

    static int factorial(int n) {
        if (n == 0) return 1;
        return n * factorial(n - 1);
    }
}`,
            output: "120"
          },
          {
            id: 32,
            category: "intermediate",
            title: "Generate Random Numbers",
            code: `import java.util.Random;
public class RandomNumbers {
    public static void main(String[] args) {
        Random random = new Random();
        for (int i = 0; i < 5; i++) {
            System.out.println(random.nextInt(100)); // Random number between 0-99
        }
    }
}`,
            output: "Random numbers between 0-99 (varies each run)"
          },
          {
            id: 33,
            category: "basic",
            title: "Check if a Year is Leap Year",
            code: `public class LeapYear {
    public static void main(String[] args) {
        int year = 2024;
        boolean isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
        System.out.println(isLeap);
    }
}`,
            output: "true"
          },
          {
            id: 34,
            category: "basic",
            title: "Find the Sum of First N Natural Numbers",
            code: `public class SumOfNaturalNumbers {
    public static void main(String[] args) {
        int n = 10, sum = n * (n + 1) / 2;
        System.out.println(sum);
    }
}`,
            output: "55"
          },
          {
            id: 35,
            category: "intermediate",
            title: "Implement a Simple Login System",
            code: `import java.util.Scanner;
public class SimpleLogin {
    public static void main(String[] args) {
        String username = "admin";
        String password = "password";
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter username: ");
        String inputUsername = scanner.nextLine();
        System.out.print("Enter password: ");
        String inputPassword = scanner.nextLine();
        if (username.equals(inputUsername) && password.equals(inputPassword)) {
            System.out.println("Login successful!");
        } else {
            System.out.println("Login failed!");
        }
    }
}`,
            output: "Login successful! (if credentials match)"
          },
          {
            id: 36,
            category: "basic",
            title: "Check if a String Contains Another String",
            code: `public class StringContains {
    public static void main(String[] args) {
        String str1 = "Automation Testing";
        String str2 = "Testing";
        System.out.println(str1.contains(str2));
    }
}`,
            output: "true"
          },
          {
            id: 37,
            category: "intermediate",
            title: "Find the Maximum Occurring Character in a String",
            code: `import java.util.HashMap;
public class MaxOccurringCharacter {
    public static void main(String[] args) {
        String str = "programming";
        HashMap<Character, Integer> charCount = new HashMap<>();
        for (char c : str.toCharArray()) {
            charCount.put(c, charCount.getOrDefault(c, 0) + 1);
        }
        char maxChar = str.charAt(0);
        int maxCount = 0;
        for (char c : charCount.keySet()) {
            if (charCount.get(c) > maxCount) {
                maxCount = charCount.get(c);
                maxChar = c;
            }
        }
        System.out.println(maxChar);
    }
}`,
            output: "m"
          },
          {
            id: 38,
            category: "advanced",
            title: "Implementing Bubble Sort",
            code: `public class BubbleSort {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}`,
            output: "11 12 22 25 34 64 90"
          },
          {
            id: 39,
            category: "advanced",
            title: "Implementing Selection Sort",
            code: `public class SelectionSort {
    public static void main(String[] args) {
        int[] arr = {64, 25, 12, 22, 11};
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
}`,
            output: "11 12 22 25 64"
          }
        ];

        // DOM Elements
        const programCard = document.getElementById("program-card");
        const programList = document.getElementById("program-list");
        const prevBtn = document.getElementById("prev-btn");
        const nextBtn = document.getElementById("next-btn");
        const showOutputBtn = document.getElementById("show-output-btn");
        const progressBar = document.getElementById("progress-bar");
        const currentProgramSpan = document.getElementById("current-program");
        const totalProgramsSpan = document.getElementById("total-programs");
        const themeSwitch = document.getElementById("theme-switch");
        const filterCheckboxes = document.querySelectorAll(".filter-options input");

        // State
        let currentProgramIndex = 0;
        let filteredPrograms = [...programs];
        let outputVisible = false;

        // Initialize
        totalProgramsSpan.textContent = programs.length;
        updateProgramList();
        displayProgram(currentProgramIndex);

        // Event Listeners
        prevBtn.addEventListener("click", showPreviousProgram);
        nextBtn.addEventListener("click", showNextProgram);
        showOutputBtn.addEventListener("click", toggleOutput);

        themeSwitch.addEventListener("change", function () {
          document.documentElement.setAttribute("data-theme", this.checked ? "dark" : "light");
        });

        filterCheckboxes.forEach((checkbox) => {
          checkbox.addEventListener("change", filterPrograms);
        });

        // Functions
        function displayProgram(index) {
          const program = filteredPrograms[index];

          if (!program) {
            programCard.innerHTML = `<div class="no-programs">No programs match your filter criteria.</div>`;
            prevBtn.disabled = true;
            nextBtn.disabled = true;
            showOutputBtn.disabled = true;
            return;
          }

          let html = `
            <div class="program-number">Program ${program.id}</div>
            <h2 class="program-title">${escapeHtml(program.title)}</h2>
            <div class="code-block">
              <button class="copy-btn" onclick="copyCode(${program.id})">Copy</button>
              <code id="code-${program.id}">${formatCode(program.code)}</code>
            </div>
            <div class="output-container ${outputVisible ? "visible" : ""}" id="output-container">
              <h3>Expected Output:</h3>
              <div class="output-content"><pre>${escapeHtml(program.output)}</pre></div>
            </div>
          `;

          programCard.innerHTML = html;

          // Update UI state
          currentProgramSpan.textContent = index + 1;
          progressBar.style.width = `${((index + 1) / filteredPrograms.length) * 100}%`;

          prevBtn.disabled = index === 0;
          nextBtn.disabled = index === filteredPrograms.length - 1;

          // Update show/hide output button text based on visibility state
          showOutputBtn.innerHTML = outputVisible
            ? '<i class="fas fa-eye-slash"></i> Hide Output'
            : '<i class="fas fa-play"></i> Show Output';

          // Update active program in list
          const programItems = document.querySelectorAll(".program-item");
          programItems.forEach((item) => item.classList.remove("active"));

          const activeItem = document.querySelector(`.program-item[data-id="${program.id}"]`);
          if (activeItem) {
            activeItem.classList.add("active");
            activeItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
          }
        }

        function escapeHtml(text) {
          return text
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        }

        function formatCode(code) {
          if (!code) return "";

          return escapeHtml(code)
            .replace(
              /\b(public|private|protected|static|final|class|interface|extends|implements|import|package|new|this|super|return|if|else|for|while|do|switch|case|default|break|continue|try|catch|finally|throw|throws|void|int|String|boolean|double|float|long|short|byte|char|Scanner|System|Math|Arrays|HashSet|HashMap|LinkedHashMap|Map|Random|StringBuilder|Integer)\b/g,
              (match) => `<span class="keyword">${match}</span>`
            )
            .replace(/"([^"]*)"/g, '<span class="string">"$1"</span>')
            .replace(/'([^']*)'/g, '<span class="string">\'$1\'</span>')
            .replace(/\/\/.*$/gm, '<span class="comment">$&</span>')
            .replace(/\b(\d+)\b/g, '<span class="number">$1</span>')
            .replace(/(\{|\}|;|:|$$|$$|\[|\])/g, (match) => `<span class="keyword">${match}</span>`);
        }

        function showPreviousProgram() {
          if (currentProgramIndex > 0) {
            currentProgramIndex--;
            displayProgram(currentProgramIndex);
          }
        }

        function showNextProgram() {
          if (currentProgramIndex < filteredPrograms.length - 1) {
            currentProgramIndex++;
            displayProgram(currentProgramIndex);
          }
        }

        function toggleOutput() {
          const outputContainer = document.getElementById("output-container");
          if (outputContainer) {
            outputVisible = !outputVisible;
            outputContainer.classList.toggle("visible");

            if (outputVisible) {
              showOutputBtn.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Output';
            } else {
              showOutputBtn.innerHTML = '<i class="fas fa-play"></i> Show Output';
            }
          }
        }

        function updateProgramList() {
          programList.innerHTML = "";

          filteredPrograms.forEach((program, index) => {
            const listItem = document.createElement("div");
            listItem.className = "program-item";
            listItem.dataset.id = program.id;

            const shortTitle = program.title.length > 25 ? program.title.substring(0, 25) + "..." : program.title;
            listItem.textContent = `${program.id}. ${shortTitle}`;

            if (index === currentProgramIndex) {
              listItem.classList.add("active");
            }

            listItem.addEventListener("click", () => {
              currentProgramIndex = index;
              displayProgram(currentProgramIndex);
            });

            programList.appendChild(listItem);
          });
        }

        function filterPrograms() {
          const selectedCategories = Array.from(filterCheckboxes)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

          if (selectedCategories.length === 0) {
            filteredPrograms = [...programs];
          } else {
            filteredPrograms = programs.filter((program) => selectedCategories.includes(program.category));
          }

          currentProgramIndex = 0;
          updateProgramList();
          displayProgram(currentProgramIndex);
          totalProgramsSpan.textContent = filteredPrograms.length;
        }

        // Global function for copy button
        window.copyCode = function(programId) {
          const codeElement = document.getElementById(`code-${programId}`);
          const code = codeElement.textContent;
          
          navigator.clipboard.writeText(code).then(() => {
            const copyBtn = codeElement.parentElement.querySelector('.copy-btn');
            const originalText = copyBtn.textContent;
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
              copyBtn.textContent = originalText;
            }, 2000);
          }).catch(err => {
            console.error('Failed to copy code: ', err);
          });
        };
      });
    