import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {Rental } from './rental.model';

@Injectable()

export class RentalService {

    private rentals: Rental[] = [{
        id: 1,
        title:"Central Apartment",
        city: 'New York',
        street: 'Times Square',
        category: 'apartment',
        image: 'http://via.placeholder,com/350*250',
        bedrooms: 3,
        description: 'Very Nice Apartment',
        dailyRate: 34,
        shared:false,
        createdAt:"24/12/2015"
      },
    
        {
          id: 2,
          title:"Central Apartment 2",
          city: 'london',
          street: 'Times Square',
          category: 'apartment',
          image: 'http://via.placeholder,com/350*250',
          bedrooms: 2,
          description: 'Very Nice Apartment',
          dailyRate: 54,
          shared:false,
          createdAt:"24/12/2015"
        },
    
        {
          id: 3,
          title:"Central Apartment 3",
          city: 'San francisco',
          street: 'Times Square',
          category: 'condo',
          image: 'http://via.placeholder,com/350*250',
          bedrooms: 3,
          description: 'Very Nice Apartment',
          dailyRate: 14,
          shared: true,
          createdAt:"24/12/2015"
        },
         
        {
          id: 4,
          title:"Central Apartment 4",
          city: 'Delhi',
          street: 'Dwarka',
          category: 'apartment',
          image: 'http://via.placeholder,com/350*250',
          bedrooms: 3,
          description: 'Very Nice Apartment',
          dailyRate: 34,
          shared: true,
          createdAt:"24/12/2015"
        }];


        public getRentalById(rentalId: number):Observable<Rental>{
            return  new Observable<Rental>((observer)=>{
                setTimeout(()=>{
                   const foundRental= this.rentals.find((rental)=>{
                        return rental.id== rentalId
                    });
                    observer.next(foundRental);
                },500);
            });
        }

        public getRentals():Observable<Rental[]>{
           return new Observable<Rental[]>((observer)=>{

                setTimeout(()=>{
                    observer.next(this.rentals);
                },2000);
            })
           
        }



    

}