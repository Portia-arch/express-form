const html = `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <script src="http://localhost:3001/buttonFunc.js"></script>
    <link rel="stylesheet" href="http://localhost:3001/mystyle.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form</title>
</head>

<body>

    <button class="open-button" onclick="openForm()">Open Form</button>

    <div class="form-popup" id="myForm">
        <form action="/new_visit" method="POST" class="form-container">
            <h1>Visitors Details</h1>

            <label for="Name"><b>Visitor Name:</b></label>
            <input type="text" placeholder="Visitor Name" name="visitor_name" required>

            <br>
            <label for="name"><b>Assistant Name:</b></label>
            <input type="text" placeholder="Assistant Name" name="assistant_name" required>

            <br>
            <label for="age"><b>Visitor's Age:</b></label>
            <input type="age" placeholder="Visitor's Age" name="visitor_age" required>

            <br>
            <br>
            <label for="date"><b>Date:</b></label>
            <input type="date" placeholder="Enter Date" name="date" required>

            <br>
            <br>
            <label for="time"><b>Time:</b></label>
            <input type="time" placeholder="Enter Time" name="time" required>

            <br><br>
            <label for="text"><b>Comments:</b></label>
            <input type="text" placeholder="Comments" name="comment">

            <br>
            <button type="submit" class="btn">Submit</button>
            <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
        </form>
    </div>
</body>

</html>`;

module.exports = html;
