import {createStore} from "vuex";
import axiosClient from '../axios';

const tmpSurveys = [
  {
    id: 100,
    title: "Vuejs",
    slug: "vue-js",
    status: "draft",
    image: "https://vuejs.org/images/logo.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper justo ac mauris iaculis dignissim. Sed blandit efficitur nunc, a bibendum leo dapibus sit amet. Integer auctor lectus at leo convallis pharetra. In dui leo, convallis a fermentum quis, luctus sed quam. Praesent varius quam id arcu finibus hendrerit. Donec pretium id odio sed sodales. Praesent quis luctus ante. Integer commodo convallis sapien et pellentesque. Nullam feugiat velit eget luctus ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    created_at: "2022-05-10 18:00:00",
    updated_at: "2022-05-11 18:00:00",
    expire_date: "2022-05-31 18:00:00",
    questions: [
      {
        id: 1,
        type: "select",
        question: "From which country are you?",
        description: null,
        data: {
          options: [
            {
              uuid: "9241948c-1434-4d46-95f4-c654c8c9eb19", text: "USA"
            },
            {
              uuid: "f9ee29de-8ff3-42fe-8d21-5b477c1083c2", text: "PT"
            },
            {
              uuid: "6bea5ec4-3148-45f2-932c-b274973daa7c", text: "ES"
            },
            {
              uuid: "5c7fc0a2-50a0-450a-9af9-dd37ac8a8348", text: "FR"
            },
          ]
        }
      },
      {
        id: 2,
        type: "checkbox",
        question: "Which language videos do you want to see on my channel?",
        description: null,
        data: {
          options: [
            {
              uuid: "9241948c-1434-4d46-95f4-c654c8c9eb19", text: "JavaScript"
            },
            {
              uuid: "f9ee29de-8ff3-42fe-8d21-5b477c1083c2", text: "PHP"
            },
            {
              uuid: "6bea5ec4-3148-45f2-932c-b274973daa7c", text: "HTML + CSS"
            },
            {
              uuid: "5c7fc0a2-50a0-450a-9af9-dd37ac8a8348", text: "All of the above"
            },
          ]
        }
      },
      {
        id: 3,
        type: "checkbox",
        question: "From which country are you?",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper justo ac mauris iaculis dignissim. Sed blandit efficitur nunc, a bibendum leo dapibus sit amet. Integer auctor lectus at leo convallis pharetra.",
        data: {
          options: [
            {
              uuid: "9241948c-1434-4d46-95f4-c654c8c9eb19", text: "USA"
            },
            {
              uuid: "f9ee29de-8ff3-42fe-8d21-5b477c1083c2", text: "PT"
            },
            {
              uuid: "6bea5ec4-3148-45f2-932c-b274973daa7c", text: "ES"
            },
            {
              uuid: "5c7fc0a2-50a0-450a-9af9-dd37ac8a8348", text: "FR"
            },
          ]
        }
      },
      {
        id: 4,
        type: "radio",
        question: "Which Laravel framework do you love most?",
        description: null,
        data: {
          options: [
            {
              uuid: "9241948c-1434-4d46-95f4-c654c8c9eb19", text: "Laravel 5"
            },
            {
              uuid: "f9ee29de-8ff3-42fe-8d21-5b477c1083c2", text: "Laravel 6"
            },
            {
              uuid: "6bea5ec4-3148-45f2-932c-b274973daa7c", text: "Laravel 7"
            },
            {
              uuid: "5c7fc0a2-50a0-450a-9af9-dd37ac8a8348", text: "Laravel 8"
            },
          ]
        }
      },
      {
        id: 5,
        type: "checkbox",
        question: "Which Laravel framework do you love most?",
        description: null,
        data: {
          options: [
            {
              uuid: "9241948c-1434-4d46-95f4-c654c8c9eb19", text: "Laravel 5"
            },
            {
              uuid: "f9ee29de-8ff3-42fe-8d21-5b477c1083c2", text: "Laravel 6"
            },
            {
              uuid: "6bea5ec4-3148-45f2-932c-b274973daa7c", text: "Laravel 7"
            },
            {
              uuid: "5c7fc0a2-50a0-450a-9af9-dd37ac8a8348", text: "Laravel 8"
            },
          ]
        }
      },
      {
        id: 6,
        type: "text",
        question: "Which Laravel framework do you love most?",
        description: null,
        data: {}
      },
      {
        id: 7,
        type: "textarea",
        question: "Which Laravel framework do you love most?",
        description: "Write your honest opionon.",
        data: {}
      },
    ],
  },
  {
    id: 200,
    title: "Laravel",
    slug: "laravel",
    status: "draft",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper justo ac mauris iaculis dignissim. Sed blandit efficitur nunc, a bibendum leo dapibus sit amet. Integer auctor lectus at leo convallis pharetra. In dui leo, convallis a fermentum quis, luctus sed quam. Praesent varius quam id arcu finibus hendrerit. Donec pretium id odio sed sodales. Praesent quis luctus ante. Integer commodo convallis sapien et pellentesque. Nullam feugiat velit eget luctus ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    created_at: "2022-05-10 18:00:00",
    updated_at: "2022-05-11 18:00:00",
    expire_date: "2022-05-31 18:00:00",
    questions: [],
  },
  {
    id: 300,
    title: "Tailwindcss",
    slug: "tailwindcss",
    status: "draft",
    image: "https://www.drupal.org/files/project-images/screenshot_361.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper justo ac mauris iaculis dignissim. Sed blandit efficitur nunc, a bibendum leo dapibus sit amet. Integer auctor lectus at leo convallis pharetra. In dui leo, convallis a fermentum quis, luctus sed quam. Praesent varius quam id arcu finibus hendrerit. Donec pretium id odio sed sodales. Praesent quis luctus ante. Integer commodo convallis sapien et pellentesque. Nullam feugiat velit eget luctus ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    created_at: "2022-05-10 18:00:00",
    updated_at: "2022-05-11 18:00:00",
    expire_date: "2022-05-31 18:00:00",
    questions: [],
  },
  {
    id: 400,
    title: "reactjs",
    slug: "react-js",
    status: "draft",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper justo ac mauris iaculis dignissim. Sed blandit efficitur nunc, a bibendum leo dapibus sit amet. Integer auctor lectus at leo convallis pharetra. In dui leo, convallis a fermentum quis, luctus sed quam. Praesent varius quam id arcu finibus hendrerit. Donec pretium id odio sed sodales. Praesent quis luctus ante. Integer commodo convallis sapien et pellentesque. Nullam feugiat velit eget luctus ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    created_at: "2022-05-10 18:00:00",
    updated_at: "2022-05-11 18:00:00",
    expire_date: "2022-05-31 18:00:00",
    questions: [],
  },
  {
    id: 500,
    title: "Angular",
    slug: "angular-js",
    status: "draft",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper justo ac mauris iaculis dignissim. Sed blandit efficitur nunc, a bibendum leo dapibus sit amet. Integer auctor lectus at leo convallis pharetra. In dui leo, convallis a fermentum quis, luctus sed quam. Praesent varius quam id arcu finibus hendrerit. Donec pretium id odio sed sodales. Praesent quis luctus ante. Integer commodo convallis sapien et pellentesque. Nullam feugiat velit eget luctus ultrices. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    created_at: "2022-05-10 18:00:00",
    updated_at: "2022-05-11 18:00:00",
    expire_date: "2022-05-31 18:00:00",
    questions: [],
  }
]

const store = createStore({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem("TOKEN"),
    },
    surveys: [...tmpSurveys],
    questionTypes: ["text", "select", "radio", "checkbox", "textarea"],
  },
  getters: {},
  actions: {
    saveSurvey({ commit }, survey){
      delete survey.image_url;
      let response;
      if(survey.id){
        response = axiosClient
          .put(`/survey/${survey.id}`, survey)
          .then((res) => {
            commit("updateSurvey", res.data);
            return res;
          })
      }else{
        response = axiosClient.post("/survey", survey).then((res) => {
          commit("saveSurvey", res.data);
          return res;
        });
      }

      return response;
    },
    register({ commit }, user){
      return axiosClient.post('/register', user)
        .then(({data}) => {
          commit('setUser', data);
          return data;
        })
    },
    login({ commit }, user){
      return axiosClient.post('/login', user)
        .then(({data}) => {
          commit('setUser', data);
          return data;
        })
    },
    logout({ commit }){
      return axiosClient.post('/logout')
        .then(response => {
          commit('logout');
          return response;
        })
    }
  },
  mutations: {
    saveSurvey: (state, survey) => {
      state.surveys = [...state.surveys, survey.data];
    },
    updateSurvey: (state, survey) => {
      state.surveys = state.surveys.map((s) => {
        if(s.id == survey.data.id){
          return survey.data;
        }
        return s;
      });
    },
    logout: state => {
      state.user.data = {};
      state.user.token = null;
    },
    setUser: (state, userData) => {
      state.user.token = userData.token;
      state.user.data = userData.user;
      sessionStorage.setItem('TOKEN', userData.token);
    }
  },
  modules: {}
})

export default store;