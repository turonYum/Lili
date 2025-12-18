<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Happy Birthday Lili! 🎉</title>
    <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="birthday-wrapper">
        <div class="floating-bg">
            <div class="bg-element"><i class="bi bi-balloon-fill"></i></div>
            <div class="bg-element"><i class="bi bi-star-fill"></i></div>
            <div class="bg-element"><i class="bi bi-heart-fill"></i></div>
            <div class="bg-element"><i class="bi bi-gift-fill"></i></div>
            <div class="bg-element"><i class="bi bi-music-note-beamed"></i></div>
            <div class="bg-element"><i class="bi bi-emoji-smile-fill"></i></div>
            <div class="bg-element"><i class="bi bi-flower1"></i></div>
            <div class="bg-element"><i class="bi bi-moon-stars-fill"></i></div>
            <div class="bg-element"><i class="bi bi-cloud-sun-fill"></i></div>
            <div class="bg-element"><i class="bi bi-rainbow"></i></div>
        </div>
        <div class="title-section">
            <div class="floating-balloons">
                <i class="bi bi-balloon-heart-fill"></i>
            </div>
            <h1 class="main-title text-pink">
                Happy Birthday, Lili!
            </h1>
            <div class="floating-balloons right">
                <i class="bi bi-balloon-heart-fill"></i>
            </div>
        </div>
        <div class="card-container">
            <div class="card shadow-lg border-0">
                <div class="card-body text-center p-3">
                    <div class="scene" id="scene">
                        <p class="story-text lead mb-4">It's your special day! You wake up to the sound of rain outside.</p>
                        <div class="choices d-grid gap-3">
                            <button class="choice-btn btn btn-lg" data-next="cake">
                                <i class="bi bi-cake2 me-2"></i>Make a wish on your birthday cake!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
