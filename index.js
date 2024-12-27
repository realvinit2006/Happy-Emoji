<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HappyEmoji</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #000; 
            color: #fff;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: flex-start;
            gap: 20px; /* Space between emoji blocks */
            padding: 20px;
            width: 80%;
            height: 80%;
        }

        .wrap {
            background-color: #222;
            color: #fff;
            padding: 15px;
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 150px;
            text-align: center;
        }

        .emoji {
            font-size: 40px; /* Larger size for emojis */
        }

        .aliases, .tags {
            font-size: 14px;
            margin-top: 5px;
            font-weight: lighter;
        }
    </style>
</head>
<body>
    <div id="wrapper">
        <!-- This will be populated with emoji data dynamically by JavaScript -->
    </div>

    <script type="module" src="script.js"></script>
</body>
</html>
