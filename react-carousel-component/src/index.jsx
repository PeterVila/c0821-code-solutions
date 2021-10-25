import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const data = [
  {
    id: 1,
    url: 'https://i.ytimg.com/vi/CZhCZW8wmi8/maxresdefault.jpg'
  },
  {
    id: 2,
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2d028b7-2a7c-424e-b64e-ece3e13965f9/dcy00dh-200e6dd8-ae41-4497-b62a-8fcf467f10cf.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyZDAyOGI3LTJhN2MtNDI0ZS1iNjRlLWVjZTNlMTM5NjVmOVwvZGN5MDBkaC0yMDBlNmRkOC1hZTQxLTQ0OTctYjYyYS04ZmNmNDY3ZjEwY2YucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Bi1Oh1e1k2buEJJE8civk97j1PnD8jikHR5At46ogXU'
  },
  {
    id: 3,
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2d028b7-2a7c-424e-b64e-ece3e13965f9/dcy2ft9-2b4f75a7-5da8-497a-9008-412ac2c22a36.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyZDAyOGI3LTJhN2MtNDI0ZS1iNjRlLWVjZTNlMTM5NjVmOVwvZGN5MmZ0OS0yYjRmNzVhNy01ZGE4LTQ5N2EtOTAwOC00MTJhYzJjMjJhMzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.F-xxONoy32MteeRdo_70H7GrG9-28vI865YrMDG17yc'
  },
  {
    id: 4,
    url: 'https://64.media.tumblr.com/39e7efb8a09727f288a413710497f5be/tumblr_p5ck84MIPX1tm05eso1_1280.png'
  },
  {
    id: 5,
    url: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d2d028b7-2a7c-424e-b64e-ece3e13965f9/dcxzkga-d6018aa6-4f5d-4c54-8c80-5e22de20d1ef.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2QyZDAyOGI3LTJhN2MtNDI0ZS1iNjRlLWVjZTNlMTM5NjVmOVwvZGN4emtnYS1kNjAxOGFhNi00ZjVkLTRjNTQtOGM4MC01ZTIyZGUyMGQxZWYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.miN8s_FylbCfBe_gTH8UGDytHppwgisweGbQOp3Bus4'
  }
];

ReactDOM.render(
  <Carousel data={data}/>,
  document.querySelector('#root')
);
