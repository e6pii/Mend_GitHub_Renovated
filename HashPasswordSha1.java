import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

public class HashPasswordSha1 {
    public static String sha1(String password) throws Exception {
        MessageDigest md = MessageDigest.getInstance("SHA-1");
        byte[] digest = md.digest(password.getBytes(StandardCharsets.UTF_8));

        StringBuilder hex = new StringBuilder();
        for (byte b : digest) {
            hex.append(String.format("%02x", b));
        }
        return hex.toString();
    }

    public static void main(String[] args) throws Exception {
        String password = "P@ssw0rd123";
        System.out.println(sha1(password));
    }
}