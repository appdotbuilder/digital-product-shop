<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (!auth()->check()) {
            return redirect()->route('login');
        }

        // For demo purposes, we'll check if user email contains 'admin'
        // In a real app, you'd have a proper role system
        if (!str_contains(auth()->user()->email, 'admin')) {
            abort(403, 'Access denied. Admin privileges required.');
        }

        return $next($request);
    }
}