import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, NumericValueAccessor } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild(IonSegment, { static: true }) segment: IonSegment;
  days = ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'];
  day_of_week = new Date().getDay();
  day = '';
  deitaTmpTemplate = [
    {
      item: 'N/A',
      dia: 'Do',
      type: 'Desayuno',
    },
    {
      item: 'N/A',
      dia: 'Do',
      type: 'Merienda',
    },
    {
      item: 'N/A',
      dia: 'Do',
      type: 'Comida',
    },
    {
      item: 'N/A',
      dia: 'Do',
      type: 'Merienda',
    },
    {
      item: 'N/A',
      dia: 'Do',
      type: 'Cena',
    },
    {
      item: '2oz Quesoo Cottage, 2 Guineitos1 1Cdita aceite oliva',
      dia: 'Lu',
      type: 'Desayuno',
    },
    {
      item: '2 Taza Fruta',
      dia: 'Lu',
      type: 'Merienda',
    },
    {
      item: '4oz Pollo, 1 Taza Arroz, 1 Taza Habichuelas',
      dia: 'Lu',
      type: 'Comida',
    },
    {
      item: '8oz Yogurt, 6 Almendras',
      dia: 'Lu',
      type: 'Merienda',
    },
    {
      item: '1 Pan Pita Integral, 2 Taza ensalda, 2 oz Atun + 1 cdita de aceite oliva o mayonesa',
      dia: 'Lu',
      type: 'Cena',
    },
    {
      item: '2 Huevos hervidos, 1Ctida Aceite Oliva, 1 Taza Fruta',
      dia: 'Ma',
      type: 'Desayuno',
    },
    {
      item: '1 Taza leche, 1 1/2 Taza cornFlakes',
      dia: 'Ma',
      type: 'Merienda',
    },
    {
      item: '4oz Atun, 1 Taza Arroz, 1 Taza Habichuela, 2 taza ensalada',
      dia: 'Ma',
      type: 'Comida',
    },
    {
      item: '1 Manzana',
      dia: 'Ma',
      type: 'Merienda',
    },
    {
      item: '2oz Quesoo Cottage, 2 Guineitos1 1Cdita aceite oliva',
      dia: 'Ma',
      type: 'Cena',
    },
    {
      item: '2 slides pan integral, 1 slide queso, 1 slide jamon lechuga + tomate',
      dia: 'Mi',
      type: 'Desayuno',
    },
    {
      item: '6 semilla cajuil, 1 taza fruta',
      dia: 'Mi',
      type: 'Merienda',
    },
    {
      item: '1 pan pita integral, 1/2 taza salsa marinada sin sal, 4oz queso mozzarella 1 slide jamon',
      dia: 'Mi',
      type: 'Comida',
    },
    {
      item: '8oz Yogurt, 1 taza de fruta',
      dia: 'Mi',
      type: 'Merienda',
    },
    {
      item: '2oz mozzarella, tomate, Albahaca , 1 cdita aceite oliva, 70gr Casabe',
      dia: 'Mi',
      type: 'Cena',
    },
    {
      item: '1 taza viveres, 2oz jamon, 1 cdita aceite oliva + vinagre + cebolla',
      dia: 'Ju',
      type: 'Desayuno',
    },
    {
      item: '8oz Yogurt, 1 taza de fruta',
      dia: 'Ju',
      type: 'Merienda',
    },
    {
      item:
        '1 taza queso cottage, 1 berenjena mediana, 1/2 taza salsa marinada sin sal, s slide pan integral , 1 cdita mantequilla light + ajo',
      dia: 'Ju',
      type: 'Comida',
    },
    {
      item: '1 Taza fruta',
      dia: 'Ju',
      type: 'Merienda',
    },
    {
      item: 'Sandwich: 2 slide pan integral, 2oz atun, 1 cdita Mayonesa light',
      dia: 'Ju',
      type: 'Cena',
    },
    {
      item: '1 taza de leche,1 1/2 cornflake, 1 taza fruta',
      dia: 'Vi',
      type: 'Desayuno',
    },
    {
      item: '8oz jugo verde, 6 almendras',
      dia: 'Vi',
      type: 'Merienda',
    },
    {
      item: '4 oz pollo, 1 taza vivieres, 1 cdita aceite de oliva + viangre + cebolla',
      dia: 'Vi',
      type: 'Comida',
    },
    {
      item: '1 Taza Fruta, 2 Cditas Mantequilla Mani',
      dia: 'Vi',
      type: 'Merienda',
    },
    {
      item: 'Crema auyama, 1 taza  auyama, licuado en su agua 4oz de pollo o queso mozarrella',
      dia: 'Vi',
      type: 'Cena',
    },
    {
      item: '2 Huevos + Vegetales, 2 slides pan integral',
      dia: 'Sa',
      type: 'Desayuno',
    },
    {
      item: '6 semillas de cajuil,1 Taza Fruta',
      dia: 'Sa',
      type: 'Merienda',
    },
    {
      item: 'Hamburguesa: 1 Pan integral, 4oz carne, lechuga + tomate',
      dia: 'Sa',
      type: 'Comida',
    },
    {
      item: '8oz Yoguen (Fruta + fruto seco)',
      dia: 'Sa',
      type: 'Merienda',
    },
    {
      item: '1 taza de viveres, 1 cdita aceite de oliva + vinagre + cebolla, 2 salchica de pavo',
      dia: 'Sa',
      type: 'Cena',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.day = this.currentDay(this.day_of_week);
    this.segment.value = this.currentDay(this.day_of_week);
  }

  currentDay(current: number) {
    const d = new Date();
    const weekday = new Array(7);
    weekday[0] = 'Do';
    weekday[1] = 'Lu';
    weekday[2] = 'Ma';
    weekday[3] = 'Mi';
    weekday[4] = 'Ju';
    weekday[5] = 'Vi';
    weekday[6] = 'Sa';

    const n = weekday[d.getDay()];
    return n;
  }

  segmentChanged(event) {
    const day = event.detail.value;
    this.day = day;
  }
}
