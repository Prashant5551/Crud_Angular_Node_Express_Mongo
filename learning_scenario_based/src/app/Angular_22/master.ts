import { Service } from '@angular/core';

@Service()
export class Master {
    loggedUser: string = '';

    getFormattedCardNo(cardNo: string) {
        const astricData = "**** **** *****";
        return astricData + " " + cardNo.substring(12);
    }

}
