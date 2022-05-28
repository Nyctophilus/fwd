/*
	script 


	"test": "ENV=test db-migrate --env test up && jasmine-ts && db-migrate db:drop test",

*/


import{Book,BookStore} from 'models.ts';


const store=new BookStore();


describe("Mythical Weapon Model",()=>{
 it('should have an index method',()=>{
    expect(store.index).toBeDefined();
 });
         I
 it('index method should returnalist of products',async()=>{
    const result=await store.index();
    expect(result).toEqual([]);
 });