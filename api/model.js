export class Order {
  
    /**
     *
     * @param {Number} id 
     * @param {Number} petId 
     * @param {Number} quantity 
     * @param {String} shipDate 
     * @param {String} status Order Status
     * @param {undefined} complete 
     */ 
    constructor(id = undefined,petId = undefined,quantity = undefined,shipDate = undefined,status = undefined,complete = undefined){
        this.id = id
        this.petId = petId
        this.quantity = quantity
        this.shipDate = shipDate
        this.status = status
        this.complete = complete
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {Number}
     */
    petId=undefined   
    /**
     * 
     * @type {Number}
     */
    quantity=undefined   
    /**
     * 
     * @type {String}
     */
    shipDate=undefined   
    /**
     * Order Status
     * @type {String}
     */
    status=undefined   
    /**
     * 
     * @type {undefined}
     */
    complete=undefined
    
}
export class Category {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     */ 
    constructor(id = undefined,name = undefined){
        this.id = id
        this.name = name
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined
    
}
export class User {
  
    /**
     *
     * @param {Number} id 
     * @param {String} username 
     * @param {String} firstName 
     * @param {String} lastName 
     * @param {String} email 
     * @param {String} password 
     * @param {String} phone 
     * @param {Number} userStatus User Status
     */ 
    constructor(id = undefined,username = undefined,firstName = undefined,lastName = undefined,email = undefined,password = undefined,phone = undefined,userStatus = undefined){
        this.id = id
        this.username = username
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
        this.phone = phone
        this.userStatus = userStatus
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    username=undefined   
    /**
     * 
     * @type {String}
     */
    firstName=undefined   
    /**
     * 
     * @type {String}
     */
    lastName=undefined   
    /**
     * 
     * @type {String}
     */
    email=undefined   
    /**
     * 
     * @type {String}
     */
    password=undefined   
    /**
     * 
     * @type {String}
     */
    phone=undefined   
    /**
     * User Status
     * @type {Number}
     */
    userStatus=undefined
    
}
export class Tag {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     */ 
    constructor(id = undefined,name = undefined){
        this.id = id
        this.name = name
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined
    
}
export class Pet {
  
    /**
     *
     * @param {Number} id 
     * @param {String} name 
     * @param {Category} category 
     * @param {Array} photoUrls 
     * @param {Array} tags 
     * @param {String} status pet status in the store
     */ 
    constructor(id = undefined,name = undefined,category = undefined,photoUrls = undefined,tags = undefined,status = undefined){
        this.id = id
        this.name = name
        this.category = category
        this.photoUrls = photoUrls
        this.tags = tags
        this.status = status
    }
       
    /**
     * 
     * @type {Number}
     */
    id=undefined   
    /**
     * 
     * @type {String}
     */
    name=undefined   
    /**
     * 
     * @type {Category}
     */
    category=undefined   
    /**
     * 
     * @type {Array}
     */
    photoUrls=undefined   
    /**
     * 
     * @type {Array}
     */
    tags=undefined   
    /**
     * pet status in the store
     * @type {String}
     */
    status=undefined
    
}
export class ApiResponse {
  
    /**
     *
     * @param {Number} code 
     * @param {String} type 
     * @param {String} message 
     */ 
    constructor(code = undefined,type = undefined,message = undefined){
        this.code = code
        this.type = type
        this.message = message
    }
       
    /**
     * 
     * @type {Number}
     */
    code=undefined   
    /**
     * 
     * @type {String}
     */
    type=undefined   
    /**
     * 
     * @type {String}
     */
    message=undefined
    
}
