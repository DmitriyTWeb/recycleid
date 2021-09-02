import { Category } from "./class-interfaces";

/* eslint-disable import/prefer-default-export */
export const tetraPak: Category = {
  tetraPak: {
    category: 'tetra-pak',
    isAcceptable: true,
    title: 'Тетрапак и аналоги',
    desc: `Cобирательный термин для многослойной упаковки продуктов.
          Упаковка состоит из нескольких слоёв картона, полиэтилена и фольги.
          Не относится к макулатуре!
          Название пошло от названия торговой марки Tetra Pak, также к этой  категории упаковке относятся другие марки: Pure Pac, Tralin Pak, Комбибло и другие.
          Иногда на таких упаковках стоит маркировка 81, 82 или 84(подробнее про маркировки упаковки).`,
    examples: 'многослойная твёрдая упаковка марок TetraPak, PurePak, EloPak, SIG',
    preparingRules: [''],
  },
};
