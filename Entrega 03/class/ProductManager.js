const fs = require ('fs')

class ProductManager {
    constructor(filepath){
        this.filepath = filepath;
    }

    async #readFile(){
        try{
            const content = await fs.promises.readFile(this.filepath, "utf-8")
            const parseContent = JSON.parse(content);
            return parseContent
        }
        catch (error){
            console.log(error)
        }
    }
    async getProducts(){
        const fileContent = await this.#readFile();
        try{
            if (fileContent.length === 0 ) throw new Error("No product Found!");
            else console.log(fileContent);
         } catch(error) {
            console.log("No product Found!");
         }
    }

    async getProductsByID(id){
        try{
        const fileContent = await this.#readFile()
        if (!fileContent.find((obj)=>obj.id === id)) throw new Error (`El Producto con el id ${obj.id} no existe`)
       else console.log(fileContent.find((obj) => obj.id === id))
        } catch{
            console.log(`El Producto con el id ${id} no existe`)
        
    }
    }

    async #checkProductCode(code){
        const fileContent = await this.#readFile();
        return fileContent.find((obj) => obj.code === code)
    }
    async addProduct(obj){
        const fileContent = await this.#readFile();
        if (await this.#checkProductCode(obj.code)) return console.log(`El Producto con el id ${obj.id} ya existe`) 

        try{
            if(fileContent.length !== 0) await fs.promises.writeFile(this.filepath,JSON.stringify([...fileContent,{...obj, id: fileContent[fileContent.length -1].id + 1}],null,2),'utf-8')
                else await fs.promises.writeFile(this.filepath, JSON.stringify ([{...obj,id: 1}]), 'utf-8')
        }catch (error){
            console.log(error)

        }

    }
    async updateProductByID(id,obj){
        const fileContent = await this.#readFile();
        const updated = fileContent.map((product) => product.id === id ? {...product, ...obj } : product)

        if (!fileContent.find((obj) => obj.id === id )) throw new Error (`El Producto con el id ${obj.id} no existe`)
        else await fs.promises.writeFile(this.filepath, JSON.stringify(updated,null,2))
        //console.log(`El Producto con el id ${obj.id} no existe`)
    }catch(error){
        console.log(`El Producto con el id ${obj.id} no existe`)
    }

    async deleteProductByID(id,obj){
        try{
        const fileContent = await this.#readFile();
        const productbyID = fileContent.filter((product) => product.id !== id )

        if (!fileContent.find((obj) => obj.id === id )) throw new Error (`El Producto con el id ${obj.id} no existe`)
        else await fs.promises.writeFile(this.filepath, JSON.stringify(productbyID,null,2))
        //console.log(`El Producto con el id ${obj.id} no existe`)
   
    }catch(error){
        console.log(`El Producto con el id ${obj.id} no existe`)
    } }
}

//const example = new ProductManager('db/db.json')
//console.log(example.getProducts() )
//const readFile = new ProductManager("./database/db.json")

module.exports = ProductManager;