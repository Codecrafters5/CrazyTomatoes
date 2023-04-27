// تعريف المتغيرات
var score = 0;
var lives = 3;
var gameover = false;

// الحصول على عناصر الصفحة
var scoreLabel = document.getElementById("score");
var livesLabel = document.getElementById("lives");
var messageLabel = document.getElementById("message");

// تحديث عدد الأرواح وعرضها على الشاشة
function updateLives() {
  lives--;
  livesLabel.innerHTML = lives;

  if (lives == 0) {
    endGame(false);
  }
}

// تحديث عدد النقاط وعرضها على الشاشة
function updateScore() {
  score++;
  scoreLabel.innerHTML = score;

  if (score == 20) {
    endGame(true);
  }
}

// إنهاء اللعبة بناءً على نتيجة اللاعب
function endGame(hasWon) {
  if (gameover) return;
  gameover = true;

  if (hasWon) {
    messageLabel.innerHTML = "أحسنت! لقد فزت.";
  } else {
    messageLabel.innerHTML = "للأسف، لقد خسرت.";
  }
}

// الكود الرئيسي لتحريك اللاعب والعدو
document.addEventListener("keydown", function(event) {
  var player = document.getElementById("player");
  var enemy = document.getElementById("enemy");
  var playerLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
  var enemyLeft = parseInt(window.getComputedStyle(enemy).getPropertyValue("left"));
  
  // تحريك اللاعب يسارًا
  if (event.key === "ArrowLeft" && playerLeft > 0) {
    player.style.left = (playerLeft - 10) + "px";
  }
  
  // تحريك اللاعب يمينًا
  if (event.key === "ArrowRight" && playerLeft < 380) {
    player.style.left = (playerLeft + 10) + "px";
  }

  // تحريك العدو يسارًا
  if (enemyLeft > 0) {
    enemy.style.left = (enemyLeft - 5) + "px";
  } else {
    enemy.style.left = 400 + "px";
  }
  
  // التصادم بين اللاعب والعدو
  if (playerLeft === enemyLeft) {
    updateLives();
  } else {
    updateScore();
  }
});
