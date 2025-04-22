export default function decorate(block) {
  block.innerHTML = `<h2>Sign Up</h2>
    <form >
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br><br>
        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password" required><br><br>
        <input type="submit" value="Submit">
    </form>`;
}