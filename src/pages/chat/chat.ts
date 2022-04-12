import jss, { Classes } from "jss";
import { styles } from "./styles";
import { container } from "../../components/container/container";
import { chatList } from "../../components/chat-list/chat-list";
import { IBlock } from "../../utils/block/iblock";
import { ChatItem } from "../../components/chat-item/chat-item";
import { InlineProperties } from "../../utils/block/inline-tag-block";
import { ComplexBlock } from "../../utils/block/complex-block";
import { chatPreview } from "../../components/chat-preview/chat-preview";
import { ChatView } from "../../components/chat-view/chat-view";
import {
  ChatViewMessage,
  ContentTypes,
} from "../../components/chat-view/chat-view-message/chat-view-message";

export class Chat extends ComplexBlock<InlineProperties> {
  chatOpen: boolean = false;

  callback() {
    this.chatOpen = true;
    this.rebuild = true;
    return true;
  }

  setUpStyles(): Classes {
    return jss.createStyleSheet(styles).attach().classes;
  }

  build(): IBlock<InlineProperties> {
    return container(this.classes.chatListContainer, [
      chatList(
        [
          new ChatItem({
            url: "https://short.link/z43sxm",
            name: "Андрей",
            sender: "",
            message: "Изображение",
            time: "14:45",
            notification: 0,
            callbacks: {
              click: this.callback.bind(this),
            },
          }),
          new ChatItem({
            url: "https://short.link/jz4367",
            name: "Валентин",
            sender: "",
            message: "Друзья, у меня для вас отличные новости",
            time: "10:15",
            notification: 1,
            callbacks: {
              click: this.callback.bind(this),
            },
          }),
          new ChatItem({
            url: "https://short.link/n3qdnu",
            name: "Евгений",
            sender: "Вы:",
            message: "стикер",
            time: "10:15",
            notification: 1,
            callbacks: {
              click: this.callback.bind(this),
            },
          }),
          new ChatItem({
            url: "https://short.link/jkn3tj",
            name: "Анна Исаковна Анатольевна",
            sender: "",
            message: "Изображение",
            time: "03:14",
            notification: 6,
            callbacks: {
              click: this.callback.bind(this),
            },
          }),
          new ChatItem({
            url: "https://tinyurl.com/44h4kk74",
            name: "Валя",
            sender: "",
            message: "Я писала тебе на счёт того отчёта",
            time: "ср",
            notification: 0,
            callbacks: {
              click: this.callback.bind(this),
            },
          }),
          new ChatItem({
            url: "https://tinyurl.com/nje6w3um",
            name: "Константин",
            sender: "",
            message: "Сообщение",
            time: "01.09.22",
            notification: 1,
            callbacks: {
              click: this.callback.bind(this),
            },
          }),
          new ChatItem({
            url: "https://short.link/3qdj8w",
            name: "Виталий",
            sender: "",
            message: "Миллионы людей едят курицу",
            time: "01.09.22",
            notification: 11,
            callbacks: {
              click: this.callback.bind(this),
            },
          }),
        ],
        [this.classes.chatList]
      ),
      container(this.classes.chatContent, [
        !this.chatOpen
          ? chatPreview()
          : new ChatView({
              url: "https://short.link/z43sxm",
              name: "Андрей",
              messages: [
                new ChatViewMessage({
                  contentType: ContentTypes.Text,
                  content: "Привет!",
                  time: "11:12",
                  sender: false,
                }),
                new ChatViewMessage({
                  contentType: ContentTypes.Text,
                  content: "Доброго времени суток!",
                  time: "11:12",
                  sender: true,
                }),
                new ChatViewMessage({
                  contentType: ContentTypes.Text,
                  content:
                    "Мне приснился сон, где я был в космосе, мы с друзьями играли в игры. И вдруг, я увидел, как моя звезда падает. Я побежал к ней быстрее, чем она падала. Когда я подбежал ближе, она взорвалась. Через несколько секунд я проснулся.",
                  time: "11:24",
                  sender: false,
                }),
                new ChatViewMessage({
                  contentType: ContentTypes.Image,
                  content: "https://short.link/ap5mhf",
                  time: "11:24",
                  sender: false,
                }),
                new ChatViewMessage({
                  contentType: ContentTypes.Text,
                  content: "Все знают, что Земля - третья планета от Солнца.",
                  time: "12:00",
                  sender: false,
                }),
                new ChatViewMessage({
                  contentType: ContentTypes.Text,
                  content: "Это очень интересно!",
                  time: "13:00",
                  sender: true,
                }),
              ],
            }),
      ]),
    ]);
  }
}
