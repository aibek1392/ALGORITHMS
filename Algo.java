public class IsPalindrome{
    public static void main(String[] args){
        IsPalindrome palTest = new IsPalindrome();
        for (String word : args) {
            System.out.println(palTest.testForPalindrome(word));
        }
    }
    public boolean testForPalindrome(String word){
        String letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
            int stringLength = word.length();
            int i = 0;
            int mirrorIndex = stringLength - (i + 1);
            while (i < mirrorIndex) {
                while (letters.indexOf(word.charAt(i)) < 0 && i <= mirrorIndex) {
                    i++;
                }
                while (letters.indexOf(word.charAt(mirrorIndex)) < 0 && mirrorIndex >= i) {
                    System.out.println(letters.indexOf(word.charAt(mirrorIndex)));
                    mirrorIndex--;
                }
                char leftLetter = word.charAt(i);
                char rightLetter = word.charAt(mirrorIndex);
                System.out.println(leftLetter + " - " + rightLetter);
                if (leftLetter != rightLetter) {
                    return false;
                }
                i++;
                mirrorIndex--;
            }
            return true;
        }
    }