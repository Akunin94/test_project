<template>
  <div v-if="user">
    <el-form label-position="top" label-width="120px">
      <el-form-item label="Введите текст">
        <el-input type="textarea" v-model="text"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="success" @click="fakeSend">Отправить</el-button>
      </el-form-item>
    </el-form>
    <div class="chat">
      <div 
        class="chat__item" 
        :class="{'chat__item--my': item.my}"
        v-for="(item,index) in chat" 
        :key="item.id"
      >
        <vue-markdown class="markdown">{{item.text}}</vue-markdown>
        <i 
          class="chat__delete el-icon-delete" 
          v-if="item.my && index === 0"
          @click.prevent="deleteItem(item.id)"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      chat: [
        {
          my: false,
          text: 'Привет, ***Akunin***, как дела?',
          id: 1
        }
      ],
      text: ''
    }
  },
  computed: {
    ...mapState({
      user: state => state.users.user
    })
  },
  methods: {
    send() {
      // отправляем новый текст на сервер и отображаем на странице optimistic
    },
    fakeSend() {
      const newChatItem = {
        my: true,
        text: this.text,
        id: Date.now().toString()
      }

      this.chat.unshift(newChatItem)
      this.text = ''
    },
    deleteItem(id) {
      // отправляем запрос на удаление сообщения и удаляем на странице optimistic
      this.chat = this.chat.filter(c => c.id !== id)
    }
  },
  watch: {
    user() {
      this.chat = [
        {
          my: false,
          text: 'Привет, ***Akunin***, как дела?',
          id: 1
        }
      ]
    }
  },
  mounted() {
    // должны получить список сообщений с этим юзером
  }
}
</script>

<style lang="scss">
.chat {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-height: calc(100vh - 450px);
  overflow: auto;
  margin-top: 50px;

  &__item {
    max-width: 40%;
    padding: 10px;
    background: #e6e6e6;
    border-radius: 10px 10px 0 10px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;

    .markdown > *:only-child {
      margin: 0;
    }

    &--my {
      align-self: flex-end;
      background: #409eff;
      color: #fff;
      border-radius: 10px 10px 10px 0;
    }
  }

  &__delete {
    margin-left: 5px;
    cursor: pointer;
  }
}
</style>