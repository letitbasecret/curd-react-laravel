<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|y

*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post("/signup",[UserController::class,"SignUp"]);
Route::post("/login",[UserController::class,"login"]);
Route::post("/add",[ProductController::class,"store"]);
Route::get("/list",[ProductController::class,"list"]);
Route::delete("/delete/{id}",[ProductController::class,"deleteProduct"]);
Route::get("/product/{id}",[ProductController::class,"getProduct"]);
Route::post("/update/{id}",[ProductController::class,"updateProduct"]);
Route::put("/updateProd/{id}",[ProductController::class,"updateData"]);
Route::get("/search/{key}",[ProductController::class,"search"]);
Route::get("/show/{id}",[ProductController::class,"showProd"]);
