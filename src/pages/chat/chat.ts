import jss from "jss";
import { styles } from "./styles";
import { container } from "../../components/container/container";
import { chatList } from "../../components/chat-list/chat-list";
import { IBlock } from "../../utils/block/iblock";
import { ChatItem } from "../../components/chat-item/chat-item";

export function chat(): IBlock {
  const { classes } = jss.createStyleSheet(styles).attach();

  return container(classes.chatListContainer, [
    chatList(
      [
        new ChatItem({
          url: "https://short.link/z43sxm",
          name: "Андрей",
          sender: "",
          message: "Изображение",
          time: "14:45",
          notification: 0,
        }),
        new ChatItem({
          url: "https://short.link/jz4367",
          name: "Валентин",
          sender: "",
          message: "Друзья, у меня для вас отличные новости",
          time: "10:15",
          notification: 1,
        }),
        new ChatItem({
          url: "https://short.link/n3qdnu",
          name: "Евгений",
          sender: "Вы:",
          message: "стикер",
          time: "10:15",
          notification: 1,
        }),
        new ChatItem({
          url: "https://short.link/jkn3tj",
          name: "Анна Исаковна Анатольевна",
          sender: "",
          message: "Изображение",
          time: "03:14",
          notification: 6,
        }),
        new ChatItem({
          url: "https://tinyurl.com/44h4kk74",
          name: "Валя",
          sender: "",
          message: "Я писала тебе на счёт того отчёта",
          time: "ср",
          notification: 0,
        }),
        new ChatItem({
          url: "https://tinyurl.com/nje6w3um",
          name: "Константин",
          sender: "",
          message: "Сообщение",
          time: "01.09.22",
          notification: 1,
        }),
        new ChatItem({
          url: "https://short.link/3qdj8w",
          name: "Виталий",
          sender: "",
          message: "Миллионы людей едят курицу",
          time: "01.09.22",
          notification: 11,
        }),
      ],
      [classes.chatList]
    ),
    container(classes.chatContent, []),
  ]);
}
