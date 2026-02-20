<?php

use Illuminate\Support\Facades\Route;

$supportedLocales = ['en', 'es', 'ar'];

// Redirect root to default locale (English)
Route::get('/', function () {
    return redirect('/en', 302);
});

// Home with locale: /en, /ar, /es
Route::get('/{locale}', function (string $locale) use ($supportedLocales) {
    if (! in_array($locale, $supportedLocales, true)) {
        abort(404);
    }
    return view('welcome', ['locale' => $locale]);
})->where('locale', 'en|es|ar');

// Locale-prefixed paths for SPA (e.g. /en/about-us, /ar/privacy-policy)
Route::get('/{locale}/{path}', function (string $locale, string $path) use ($supportedLocales) {
    if (! in_array($locale, $supportedLocales, true)) {
        abort(404);
    }
    $allowedPaths = ['about-us', 'contact-us', 'disclaimer', 'privacy-policy'];
    if (! in_array($path, $allowedPaths, true)) {
        abort(404);
    }
    return view('welcome', ['locale' => $locale]);
})->where('locale', 'en|es|ar');
