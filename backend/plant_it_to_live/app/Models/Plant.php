<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;
class Plant extends Authenticatable implements JWTSubject
{
    public  $table="plants";
    protected $fillable=['common_name','scientific_name','watering','fertilizer','sunlight','pruning','img','water_amount','fertilizer_amount','sun_per_day','soil_salinty','appropriate_season','admin_id'];
    use  HasFactory, Notifiable  ;
    public function admin ()
    {
        return $this->belongsTo('App\Models\Admin','admin_id');
    }
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims():array
    {
        return [];
    }
}
