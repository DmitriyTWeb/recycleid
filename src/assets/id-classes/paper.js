/* eslint-disable import/prefer-default-export */
export const paper = {
  corrugatedBoard: {
    isAcceptable: true,
    title: 'Гофрокартон',
    desc: 'Упаковочный материал, состоящий из склеенных бумажных слоев, как минимум один из которых представляет собой гофрированный лист.',
    preparingRules: ['paper'],
  },
  craftPaper: {
    isAcceptable: true,
    title: 'Крафт-бумага',
    desc: '(нем. Kraft — сила) — высокопрочная обёрточная бумага из слабопроваренной длинноволокнистой сульфатной целлюлозы. Производится из древесины в процессе сульфатной варки, также известной как крафт-процесс. Используется для упаковочных целей, а также изготовления бумажных изделий, обязанных быть прочными и износостойкими — гофрокартона, крафт-мешков, пакетов, конвертов, бумажных шпагатов и т. п. Обычно крафт-бумага производится коричневого цвета, однако может быть и отбеленной.',
    preparingRules: ['paper'],
  },
  hardPaperCup: {
    isAcceptable: false,
    title: 'Бумажный стаканчик',
    desc: 'описание бумажного стаканчика',
    preparingRules: ['paper'],
  },
  packOfCigarettes: {
    isAcceptable: false,
    title: 'Пачка сигарет',
    desc: 'описание пачки сигарет',
    preparingRules: ['paper'],
  },
  pulpPaper: {
    isAcceptable: true,
    title: 'Пульперкартон',
    desc: 'описание пульперкартона',
    preparingRules: ['paper'],
  },
  simplePaper: {
    isAcceptable: true,
    title: 'Бумага',
    desc: 'описание бумаги',
    preparingRules: ['paper'],
  },
};
