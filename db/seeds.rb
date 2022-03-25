# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "seeding database"

puts "destroying former seeds"
Guest.destroy_all
Room.destroy_all
Visit.destroy_all

puts "seeding guests"
g1 = Guest.create(name: "Gustave H", gender: "M", profession: "Heir/Heiress", username: "MrGustave", password: "password1")
g2 = Guest.create(name: "Zero Moustafa", gender: "M", profession: "Industrialist", username: "ZeroHero", password: "password2")
g3 = Guest.create(name: "Madame D", gender: "F", profession: "Aristocrat", username: "DuchessD", password: "password3")


puts "seeding rooms"
r1 = Room.create(number: 11, room_type: "Deluxe Room", price: 975)
r2 = Room.create(number: 12, room_type: "Deluxe Room", price: 975)
r3 = Room.create(number: 14, room_type: "Deluxe Room", price: 975)
r4 = Room.create(number: 15, room_type: "Deluxe Room", price: 975)
r5 = Room.create(number: 16, room_type: "Deluxe Room", price: 975)

r6 = Room.create(number: 21, room_type: "Grand Deluxe Room", price: 1400)
r7 = Room.create(number: 22, room_type: "Grand Deluxe Room", price: 1400)
r8 = Room.create(number: 23, room_type: "Grand Deluxe Room", price: 1400)
r9 = Room.create(number: 24, room_type: "Grand Deluxe Room", price: 1400)
r10 = Room.create(number: 25, room_type: "Grand Deluxe Room", price: 1400)

r11 = Room.create(number: 31, room_type: "Executive Room", price: 1850)
r12 = Room.create(number: 32, room_type: "Executive Room", price: 1850)
r13 = Room.create(number: 33, room_type: "Executive Room", price: 1850)
r14 = Room.create(number: 34, room_type: "Executive Room", price: 1850)
r15 = Room.create(number: 35, room_type: "Executive Room", price: 1850)

r16 = Room.create(number: 41, room_type: "Superior Room", price: 2700)
r17 = Room.create(number: 42, room_type: "Superior Room", price: 2700)
r18 = Room.create(number: 43, room_type: "Superior Room", price: 2700)
r19 = Room.create(number: 44, room_type: "Superior Room", price: 2700)
r20 = Room.create(number: 45, room_type: "Superior Room", price: 2700)

r21 = Room.create(number: 51, room_type: "Archduchess Elizabeth Suite", price: 4500)

puts "seeding visits"
Visit.create(guest_id: g1.id, room_id: r5.id, check_in: "2022-04-02", check_out: "2022-04-05")
Visit.create(guest_id: g2.id, room_id: r15.id, check_in: "2022-04-22", check_out: "2022-04-26")
Visit.create(guest_id: g3.id, room_id: r21.id, check_in: "2022-12-26", check_out: "2023-01-04")

puts "all done!"