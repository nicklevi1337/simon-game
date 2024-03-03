**Правила игры**
• Игровое поле состоят из 4 квадратов / кнопок, каждый из которых производит определенный тон и
«загорается» при нажатии.
• Раунд в игре состоит из устройства, освещающего одну или несколько кнопок в случайном порядке. После чего игрок должен воспроизвести этот порядок, нажимая кнопки.
• Если игрок успешно воспроизводит последовательность, то они переходят к следующему раунду.
• Если игрок не воспроизводит последовательность, то игра окончена (уведомление должно
отображаться для пользователя).
• С каждым раундом количество кнопок (последовательность) увеличивается.

[Дополнительная информация об игре](https://en.wikipedia.org/wiki/Simon_(game))
[Пример игры в действии](http://www.kellyking.me/projects/simon/)

**Функциональность**
• При воспроизведении последовательности кнопки / квадрат должны «загореться».
• Каждая кнопка / квадрат должны издавать уникальный звук во время игры - вы можете использовать
те же аудиофайлы, которые используются для этой версии игры Simon

**Должно быть 3 уровня сложности - легкий, нормальный и сложный**
• Легкий: время между каждой кнопкой в последовательности должно быть 1,5 сек
• Средний: время между каждой кнопкой в последовательности должно быть 1,0 сек.
• Сложный: время между каждой кнопкой в последовательности должно быть 0,4 сек.

**Дизайн**
Время на это задание должно быть потрачено на функциональность, а не на дизайн, поэтому, пожалуйста,
следуйте основному дизайну игры.












  data() {
    return {
      currentRound: 0,
      gameOver: false
    };
  },

  mounted() {
    // Получаем все кнопки
    const buttons = document.querySelectorAll(".game-board li");

    // Функция для воспроизведения звука
    function playSound(color) {
      const audio = new Audio(`@/assets/sounds/${color}.mp3`);
      audio.play();
    }

    // Функция для загорания кнопки
    function lightUpButton(button) {
      button.style.opacity = 1; // Загораем кнопку
      const color = button.className; // Получаем цвет кнопки
      playSound(color); // Воспроизводим звук
      setTimeout(() => {
        button.style.opacity = 0.6; // Выключаем кнопку через 0.5 секунды
      }, 500);
    }

    startGame() {
      // Ваш код для начала игры, включая воспроизведение звуков и обновление текущего раунда
    }

    // Добавляем обработчик события для каждой кнопки
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        lightUpButton(button);
      });
    });
  },


      playSound(color) {
      const audio = new Audio(`/assets/sounds/${color}.mp3`);
      audio.play();
    },






    name: "SimonGame",
  data() {
    return {
      currentRound: 0,
      gameOver: false,
      sequence: [],
      difficulty: 'easy', // начальный уровень сложности
      isPlayingSequence: false
    };
  },
  methods: {

    playSound(color) {
      let audio;
      switch(color) {
        case 'red':
          audio = new Audio(redSound);
          break;
        case 'yellow':
          audio = new Audio(yellowSound);
          break;
        case 'blue':
          audio = new Audio(blueSound);
          break;
        case 'green':
          audio = new Audio(greenSound);
          break;
        default:
          return;
      }
      audio.play();
    },

    lightUpButton(index) {
  const buttons = document.querySelectorAll('.game-board li');
  if (buttons.length > index && buttons[index]) {
    const button = buttons[index];
    button.style.opacity = 1;
    const color = button.className;
    this.playSound(color);
    setTimeout(() => {
      button.style.opacity = 0.6;
    }, 500);
  } else {
    console.error('Button not found or index out of bounds');
  }
},

    handleButtonClick(index) {
  // Проверяем, что игра еще не завершена
  if (!this.gameOver) {
    // Проверяем, что индекс кнопки совпадает с текущей кнопкой в последовательности
    if (index === this.sequence[this.currentSequenceIndex]) {
      // Если совпадает, продолжаем игру
      this.lightUpButton(index);
      this.currentSequenceIndex++;
      // Проверяем, завершена ли текущая последовательность
      if (this.currentSequenceIndex === this.sequence.length) {
        // Если завершена, переходим к следующему раунду
        this.currentRound++;
        this.currentSequenceIndex = 0;
        this.generateSequence();
        setTimeout(() => {
          this.playSequence();
        }, 1000);
      }
    } else {
      // Если индекс кнопки не совпадает, игра завершается
      this.gameOver = true;
    }
  }
},
    generateSequence() {
  this.sequence = [];
  for (let i = 0; i < this.currentRound; i++) {
    const randomButtonIndex = Math.floor(Math.random() * 4);
    this.sequence.push(randomButtonIndex);
  }
},
async playSequence() {
  this.isPlayingSequence = true;
  for (const buttonIndex of this.sequence) {
    const button = document.querySelectorAll('.game-board li')[buttonIndex];
    this.lightUpButton(button);
    await this.delay(1000 / this.getDelayMultiplier()); // задержка между кнопками в зависимости от уровня сложности
    button.style.opacity = 0.6; // выключаем кнопку
    await this.delay(100); // задержка перед следующей кнопкой
  }
  this.isPlayingSequence = false;
},
getDelayMultiplier() {
  switch (this.difficulty) {
    case 'easy':
      return 1.5;
    case 'medium':
      return 1.0;
    case 'hard':
      return 0.4;
    default:
      return 1.0;
  }
},
delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
},
startGame() {
      // Начать новую игру
      this.currentRound = 1; // сбросить раунд до 1
      this.currentSequenceIndex = 0;
      this.gameOver = false;
      this.generateSequence(); // генерировать новую последовательность для первого раунда
      this.playSequence(); // воспроизвести последовательность
    }
  }





































  начало


  <template>
    <div class="container">
      <!-- Название игры -->
      <h1 class="text">Simon Game</h1>
      
      <!-- Игровое поле с кругом и кнопками -->
      <div class="game-board">
        <ul>
          <li class="red" ></li>
          <li class="yellow"></li>
          <li class="blue" ></li>
          <li class="green" ></li>
        </ul>
      </div>
      <div class="tools">
      <!-- Блок с информацией о раунде и уровнями сложности -->
      <div class="game-info">
        <h2> Раунд : <span></span> </h2>
        <button class="game-info__button">Start</button>
        <p >Sorry, you lost after <span></span> rounds!</p>
        </div>
        
        <!-- Выбор уровня сложности -->
        <div class="game-options">
  <h2>Выбор режима:</h2>

  <div class="difficulty-level">
    <input type="radio" id="easy" name="level" value="easy" >
    <label for="easy">Легкий уровень</label>
  </div>

  <div class="difficulty-level">
    <input type="radio" id="medium" name="level" value="medium" >
    <label for="medium">Средний уровень</label>
  </div>

  <div class="difficulty-level">
    <input type="radio" id="hard" name="level" value="hard">
    <label for="hard">Сложный уровень</label>
  </div>
</div>

</div>
    </div>
  </template>


<script>

import redSound from '../assets/sounds/red.mp3';
import yellowSound from '../assets/sounds/yellow.mp3';
import blueSound from '../assets/sounds/blue.mp3';
import greenSound from '../assets/sounds/green.mp3';




</script>


<style scoped>
.container {
  width: 540px;
    margin: 0 auto;

}

.text{
  margin: 32px 0 64px;
    text-align: center;
}

.game-board {
  background: #fff;
    position: relative;
    float: left;
    margin-right: 36px;
    width: 302px;
    height: 295px;
    -webkit-border-radius: 150px 150px 150px 150px;
    border-radius: 150px 150px 150px 150px;
    box-shadow: 2px 1px 12px #aaa;
}

.active {
  opacity: 1; /* Делаем элемент полностью видимым */
  transition: opacity 0.5s; /* Добавляем плавный переход для эффекта мигания */
}

ul, li {
	padding: 0;
	margin: 0;
}

.red, .blue, .yellow, .green {
	opacity: 0.6;
	height: 290px;
	-webkit-border-radius: 150px 150px 150px 150px;
	border-radius: 150px 150px 150px 150px;
	position: absolute;
	text-indent: 10000px;
}

.red:hover, .blue:hover, .yellow:hover, .green:hover {
	border: 2px solid rgb(55, 23, 130)
}

.red {
	background: #FF5643;
	clip: rect(0px, 300px, 150px, 150px);
	width: 296px;
}

.blue {
	background: dodgerblue;
	clip: rect(0px, 150px, 150px, 0px);
	width: 300px;
}

.yellow {
	background: #FEEF33;
	clip: rect(150px, 150px, 300px, 0px);
	width: 300px;
}

.green {
	background: #BEDE15;
	clip: rect(150px,300px, 300px, 150px);
	width: 296px;
}

.tools{
  display: flex;
    flex-direction: column;
}


.game-options{
  margin-top: 30px;
}

h2 {
margin: 0;
margin-bottom: 10px;
}

p{
  display: none;
}

.game-info__button{
    width: 100px;
    box-sizing: border-box;
    font-size: 1.4em;
    -webkit-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    background: #6DABE8;
    border: none;
    padding: 0.3em 0.6em;
}

.game-info__button:hover {
  background-color: #9192d4; 
  color: white;
  cursor: pointer; 
}

.difficulty-level {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.difficulty-level li {
  margin-bottom: 10px;
}

/* Стили для радио-кнопок */
.difficulty-level input[type="radio"] {
  
  margin-bottom: 5px; 
}

</style>