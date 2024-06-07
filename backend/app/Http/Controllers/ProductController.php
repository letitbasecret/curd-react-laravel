<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $product=new Product();
        $product->name=$request->input('name');
        $product->price=$request->input("price");
        $product->description=$request->input("description");
        $product->file=$request->input('file');

        $product->save();
        return $product;
    }

    /**
     * Display the specified resource.
     */
    public function list(Product $product)
    {
        return Product::all();
    }

    public function deleteProduct($id){
        $product=Product::where("id",$id)->delete();
        if(!$product){

            return response([
                "error"=>"something went wrong"
            ]);
        }else{
            return response([
                "success"=>"deleted"
            ]);
        }

    }
    public function getProduct($id){
$product=Product::find($id);
// dd($product);
if(!$product){
    return response([
        "error"=>"something went wrong"
    ]);
}else{
    return response($product);
}
    }
    public function updateProduct($id ,request $req){
$product=Product::find($id);
return $product;
    }
    public function updateData($id,request $request){

        $product = Product::find($id);
        $product->name=$request->input('name');
        $product->price=$request->input("price");
        $product->description=$request->input("description");
        $product->file=$request->input('file');

        $product->save();
        return $product;

    }
public function search($key){
    return Product::where("name",'LIKE',"%$key%")->get();

}

public function showProd($id){


}
    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        //
    }
}
