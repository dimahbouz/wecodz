<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 5; $i++) { 
            DB::table('users')->insert([
                'fname' => "fname$i",
                'lname' => "lname$i",
                'username' => "username$i",
                'gender' => 'man',
                'birthday' => "15-06-198$i",
                'email' => "email$i@email.com",
                'password' => bcrypt("passworduser$i")
            ]);
        }
    }
}
