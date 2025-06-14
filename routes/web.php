<?php

use Illuminate\Support\Facades\Route;
use App\Models\user;

Route::get('/',function(){
    return view('index');
});

Route::get('unicode',function(){
    //return 'phuong thuc get cua uniccode';
    return view('form');
});
Route::post('unicode',function(){
    return 'phuong thuc post cua path/unicode';
});
