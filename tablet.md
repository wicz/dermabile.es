---
layout: null
---

<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>
<body>
  <main class="relative">
    <img id="img1" src="/assets/images/uploads/tablet-1.png"
    class="transition-opacity absolute top-12 left-0" />
    <img id="img2" src="/assets/images/uploads/tablet-2.png"
    class="transition-opacity opacity-0 absolute top-12 left-0" />
  </main>
  <script>
    setInterval(function() {
      document.getElementById("img1").classList.toggle("opacity-0")
      document.getElementById("img2").classList.toggle("opacity-100")
    }, 30000)
  </script>
</body>
</html>
