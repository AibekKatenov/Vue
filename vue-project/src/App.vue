<script>
export default {
  data() {
    return {
      activeTab: '',
      showSubMenu: false,
      activeSubMenuTab: '',
      showAerodynamicsSubMenu: false,
      showDescriptionText: false,
      descriptionText: '',
      imgsrc: '',
    };
  },
  methods: {
    toggleSubMenu(tab) {
      let elem = (document.getElementById('cl').style.display = 'inline-block');
      if (tab === 'construction') {
        this.showSubMenu = true;
        this.showAerodynamicsSubMenu = false;
      } else if (tab === 'aerodynamics') {
        this.showSubMenu = false;
        this.showAerodynamicsSubMenu = true;
      }

      this.activeTab = tab;
      this.activeSubMenuTab = '';
      this.showDescriptionText = false;
    },
    toggleSubMenuClose(tab) {
      let elem = (document.getElementById('cl').style.display = 'none');
      this.activeTab = '';
      this.showSubMenu = false;
      this.showAerodynamicsSubMenu = false;
    },
    showDescription(tab) {
      let elem = (document.getElementById('cl').style.display = 'none');
      this.activeTab = '';
      this.showSubMenu = false;
      this.showAerodynamicsSubMenu = false;
      if (tab === 'cabin') {
        this.descriptionText = 'Описание кабины экипажа';
        this.imgsrc = 'https://s0.rbk.ru/v6_top_pics/media/img/8/89/754274444194898.jpg'
      } else if (tab === 'cargo') {
        this.descriptionText = 'Описание грузового отделения';
        this.imgsrc = 'https://dlg.kz/upload/iblock/150/yffgozt8h98cchy269ct5s8jvsqfug77.jpg'
      } else if (tab === 'specialCases') {
        this.descriptionText = 'Описание особых случаев';
        this.imgsrc = 'https://amastercar.ru/articles/img/aerodinamika.jpg'
      } else if (tab === 'weather') {
        this.descriptionText = 'Описание погодных явлений';
        this.imgsrc = 'data:image/jpeg;base64,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'
      }

      this.activeSubMenuTab = tab;
      this.showDescriptionText = true;
    },
  },
};
</script>

<template>
  <div id="app">
    <Model />
    <div class="nav">
      <div class="tab" @click="toggleSubMenu('construction')" :class="{ 'active': activeTab === 'construction' }">Конструкция вертолета</div>
      <div class="tab" @click="toggleSubMenu('aerodynamics')" :class="{ 'active': activeTab === 'aerodynamics' }">Аэродинамика</div>
      <div class="tab" id="cl" @click="toggleSubMenuClose('closer')" :class="{ 'active': activeTab === 'close' }">Закрыть меню</div>
    </div>
    <div class="backer">
      <div class="submenu" v-if="showSubMenu">
        <div class="submenu-tab animated-button1" @click="showDescription('cabin')" :class="{ 'active': activeSubMenuTab === 'cabin' }">Кабина экипажа</div>
        <div class="submenu-tab animated-button1" @click="showDescription('cargo')" :class="{ 'active': activeSubMenuTab === 'cargo' }">Грузовое отделение</div>
      </div>

      <div class="submenu" v-else-if="showAerodynamicsSubMenu">
        <div class="submenu-tab animated-button1" @click="showDescription('specialCases')" :class="{ 'active': activeSubMenuTab === 'specialCases' }">Особые случаи</div>
        <div class="submenu-tab animated-button1" @click="showDescription('weather')" :class="{ 'active': activeSubMenuTab === 'weather' }">Погодные явления</div>
      </div>

      <div class="description" v-if="showDescriptionText">
        <p class="hrefer">{{ descriptionText }}</p>
        <p class="hrefer" v-if="activeSubMenuTab === 'specialCases' || activeSubMenuTab === 'weather' || activeSubMenuTab === 'cabin' || activeSubMenuTab === 'cargo'">
          Cсылка на стартовую страницу:
          <a href="/">Стартовая страница</a>
        </p>
        <div class="retro">
          <img :src="imgsrc" alt="">
        </div>
      </div>
    </div>
  </div>
</template>




<style>

.retro{
  width: 500px;
  height: 300px;
}

.retro img{
  width: 100%;
  height: 100%;
}

*{
  padding: 0;
  margin: 0;
}

#app{
 margin: 2px; 
}
.tab.active {
  background-color: #ccc;
}

.submenu {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: space-between;
}

.submenu-tab {
  cursor: pointer;
  background-color: #e0e0e0;
}

.submenu-tab.active {
  background-color: #ccc;
}

#cl{
  display: none;
}

.nav{
  background: radial-gradient(40% 50%, #4b07f6, #000000);
}

.hrefer{
  color:darkred;
  font-size: 30px;
  font-weight: 700;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.description{
  padding: 10px;
}

.hrefer a{
  text-decoration: none;
  color: rgb(5, 5, 4)
}

</style>
