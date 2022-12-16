import { Component } from '@angular/core';
import { Product, ProductCard } from '../shared/models/product.models';
import { AuthService } from '../shared/services/auth.service';
import { ShopService } from '../shared/services/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html'
})
export class ShopComponent {

  isConnect : boolean = false
  listProductShop : Product[] = []
  myCart : ProductCard[] = []

  totalCard_TVAC : number = 0
  totalCard_HTVA : number = 0

  constructor(private shopS : ShopService, private authS : AuthService)
  {
    this.authS.isConnect$.subscribe((isConnect : boolean) => {
      this.isConnect = isConnect
    })
    
    this.shopS.getProduct().subscribe((dataBackend : Product[]) => {
      this.listProductShop = dataBackend
    })
  }
  

  addProdToCard(prodId : number)
  {
    let productFinded = this.listProductShop.find(prod => prod.id == prodId)
    //on vérifie que le product exist

    if(productFinded != undefined)
    { 

      //on va voir dans le panier existant si le produit y est déjà !
      let productExist = this.myCart.find(prod => prod.id == prodId) //par référence !!!! en mémoire c'est ce produits a la place 458595 
                                                                      //-> alors il renvoi la valeur qu'a l'emplacement la.. et pas une copie

      if(productExist != undefined) //si oui ! c'est qu'on peux ajouter a la qty (1)
      {
        productExist.qty ++
      }
      else //si pas, on ajoute notre new prod à la list
      {
        //si il existe, on récupère et on crée un product a part pour le panier
        let { name, price, brand } = productFinded

        let prodToAdd : ProductCard = {
          name,
          price : (price / 1.21),
          brand,
          id : prodId,
          qty : 1
        }

        this.myCart.push(prodToAdd)
      }


      //partie gestion du total panier
      this.totalCard_TVAC += productFinded.price //tvac 
      this.totalCard_HTVA += (productFinded.price / 1.21) //htva

    }
  }

}
