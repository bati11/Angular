import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { AllCommunityModule, ColDef, ModuleRegistry } from 'ag-grid-community';
ModuleRegistry.registerModules([AllCommunityModule]);
import { Register } from '../model/register.model';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  columnDefs: ColDef[] = [
    { field: 'firstName', headerName: 'שם פרטי' },
    { field: 'lastName', headerName: 'שם משפחה' },
    { field: 'price', headerName: 'מחיר' },
    { field: 'lessonName', headerName: 'שם שיעור' },
    { field: 'phone', headerName: 'טלפון' },
    { field: 'id', headerName: 'תעודת זהות' },
    // { field: 'isPayed', headerName: 'שולם' , ngStyle: (params:any) => {
    //   return {
    //     'background-color': params.value ? 'lightgreen' : 'lightcoral',
    //     'color': 'black',
    //     'font-weight': 'bold'
    //   };
    // }},
    {
  field: 'isPayed',
  headerName: 'שולם',
  cellStyle: (params: any) => {
    return {
      'background-color': params.value ? 'lightgreen':'white',
      'color': 'black',
    };
  }
  },
    { headerName: "פרטים",
      cellRenderer: (params:any) => {
      const button = document.createElement('button');
      button.innerText = 'פרטים נוספים';
      const componentScope = this; 
      button.addEventListener('click', () => {
      componentScope.showDetails(params.data); 
      });
      return button;
      }
    }
  ];

  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  rowData: Register[] = [
    { firstName: 'bati', lastName: 'mandel', id: '1', phone: '054-1234567', lessonName:  'heroby' , price: 100, isPayed: true , moreDetails: 'אבני נזר 32 מודיעין עילית' },
    { firstName: 'tzipi', lastName: 'levy', id: '2', phone: '054-7654321', lessonName:  'balet' , price: 150, isPayed: false , moreDetails: 'חזון איש 5 בני ברק' },
    { firstName: 'chavi', lastName: 'cohen', id: '3', phone: '054-1111111', lessonName:  'filatis' , price: 200, isPayed: true, moreDetails: 'רבי עקיבא 8 אלעד' },
    { firstName: 'chani', lastName: 'shwartz', id: '4', phone: '054-2222222', lessonName:  'heroby' , price: 120, isPayed: false , moreDetails: 'מלכי ישראל 12 ירושלים' },
    { firstName: 'tovi', lastName: 'gold', id: '5', phone: '054-3333333', lessonName:  'heroby' , price: 180, isPayed: true , moreDetails: 'הבעש"ט 15 ביתר עילית' },
    { firstName: 'avigail', lastName: 'levinson', id: '6', phone: '054-4444444', lessonName:  'heroby' , price: 130, isPayed: false , moreDetails: 'רבי מאיר 10 קרית ספר' },
    { firstName: 'dani', lastName: 'mizrahi', id: '7', phone: '054-5555555', lessonName:  'balet' , price: 160, isPayed: true , moreDetails: 'הרב שך 3 אשדוד' },
    { firstName: 'yael', lastName: 'shalev', id: '8', phone: '054-6666666', lessonName:  'filatis' , price: 140, isPayed: false , moreDetails: 'רבי יהודה הנשיא 7 בית שמש' },
    { firstName: 'דינה', lastName: 'ben david', id: '9', phone: '054-7777777', lessonName:  'yoga' , price: 170, isPayed: true , moreDetails: 'חזון איש 20 מודיעין עילית' },
    { firstName: 'noa', lastName: 'friedman', id: '10', phone: '054-8888888', lessonName:  'filatis' , price: 190, isPayed: false , moreDetails: 'שפת אמת 4 בני ברק' },
    { firstName: 'שרה', lastName: 'כהן', id: '11', phone: '054-9999999', lessonName: 'filatis', price: 110, isPayed: true , moreDetails: 'רבי עקיבא 15 אלעד' },
    { firstName: 'רחל', lastName: 'לוי', id: '12', phone: '054-1212121', lessonName: 'yoga', price: 115, isPayed: false , moreDetails: 'הגר"א 8 ביתר עילית' },
    { firstName: 'מרים', lastName: 'פרידמן', id: '13', phone: '054-2323232', lessonName: 'filatis', price: 125, isPayed: true , moreDetails: 'רבי מאיר 22 קרית ספר' },
    { firstName: 'חיה', lastName: 'גרינברג', id: '14', phone: '054-3434343', lessonName: 'yoga', price: 135, isPayed: false , moreDetails: 'החיד"א 9 ירושלים' },
    { firstName: 'לאה', lastName: 'בלוי', id: '15', phone: '054-4545454', lessonName: 'filatis', price: 145, isPayed: true ,  moreDetails: 'הגרש"ז 6 מודיעין עילית' },
    { firstName: 'אסתר', lastName: 'רוזנברג', id: '16', phone: '054-5656565', lessonName: 'yoga', price: 155, isPayed: false , moreDetails: 'הבעש"ט 18 ביתר עילית' },
    { firstName: 'יעל', lastName: 'שטרן', id: '17', phone: '054-6767676', lessonName: 'heroby', price: 165, isPayed: true , moreDetails: 'רבי מאיר 5 קרית ספר' },
    { firstName: 'תמר', lastName: 'אברהם', id: '18', phone: '054-7878787', lessonName: 'filatis', price: 175, isPayed: false, moreDetails: 'הרב שך 8 אשדוד' },
    { firstName: 'אביגיל', lastName: 'כהן', id: '19', phone: '054-8989898', lessonName: 'balet', price: 185, isPayed: true , moreDetails: 'הגר"א 12 ביתר עילית' },
    { firstName: 'דינה', lastName: 'לוי', id: '20', phone: '054-9090909', lessonName: 'zumba', price: 195, isPayed: false , moreDetails: 'חזון איש 25 בני ברק' },
    { firstName: 'רבקה', lastName: 'מנדל', id: '21', phone: '054-1010101', lessonName: 'zumba', price: 205, isPayed: true , moreDetails: 'רבי עקיבא 20 אלעד' },
    { firstName: 'שרה', lastName: 'שפירא', id: '22', phone: '054-1111111', lessonName: 'yoga', price: 215, isPayed: false , moreDetails: 'החיד"א 14 ירושלים' },
    { firstName: 'חנה', lastName: 'גולדשטיין', id: '23', phone: '054-1212121', lessonName: 'heroby', price: 225, isPayed: true , moreDetails: 'הגרש"ז 10 מודיעין עילית' },
    { firstName: 'מיכל', lastName: 'ברקוביץ', id: '24', phone: '054-1313131', lessonName: 'balet', price: 235, isPayed: false , moreDetails: 'הבעש"ט 22 ביתר עילית' },
    { firstName: 'תמרה', lastName: 'רוזנבלום', id: '25', phone: '054-1414141', lessonName: 'filatis', price: 245, isPayed: true , moreDetails: 'רבי מאיר 18 קרית ספר' },
    { firstName: 'אורית', lastName: 'כהן', id: '26', phone: '054-1515151', lessonName: 'heroby', price: 255, isPayed: false , moreDetails: 'הרב שך 12 אשדוד' },
    { firstName: 'יעל', lastName: 'לוי', id: '27', phone: '054-1616161', lessonName: 'yoga', price: 265, isPayed: true , moreDetails: 'הגר"א 20 ביתר עילית' },
    { firstName: 'רחל', lastName: 'פרידמן', id: '28', phone: '054-1717171', lessonName: 'zumba', price: 275, isPayed: false , moreDetails: 'חזון איש 30 בני ברק' },
    { firstName: 'חיה', lastName: 'גרינברג', id: '29', phone: '054-1818181', lessonName: 'yoga', price: 285, isPayed: true , moreDetails: 'החיד"א 20 ירושלים' },
    { firstName: 'לאה', lastName: 'קלרג', id: '30', phone: '054-1919191', lessonName: 'zumba', price: 295, isPayed: false , moreDetails: 'הגרש"ז 14 מודיעין עילית' },
    { firstName: 'אסתר', lastName: 'רוזנברג', id: '31', phone: '054-2020202', lessonName: 'filatis', price: 305, isPayed: true , moreDetails: 'הבעש"ט 30 ביתר עילית' }
  ];


  showDetails(data: any) {
      const index = this.rowData.findIndex(element => {
        return element.id === data.id;
      });
      alert(`גר ב: ${this.rowData[index].moreDetails}`);
    }
  
    
}


