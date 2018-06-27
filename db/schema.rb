# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180627194414) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cabins", force: :cascade do |t|
    t.string "size"
    t.string "building"
    t.string "status"
    t.boolean "smoking_room"
    t.boolean "ada_accessible"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "base_price"
  end

  create_table "promo_codes", force: :cascade do |t|
    t.string "code"
    t.string "description"
    t.date "start_date"
    t.date "end_date"
    t.integer "max_useable"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "kind"
    t.float "value"
  end

  create_table "reservations", force: :cascade do |t|
    t.date "start_date"
    t.date "end_date"
    t.text "special_requests"
    t.boolean "smoking_room"
    t.string "size"
    t.boolean "ada_accessible"
    t.bigint "cabin_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cabin_id"], name: "index_reservations_on_cabin_id"
    t.index ["user_id"], name: "index_reservations_on_user_id"
  end

  create_table "user_promo_codes", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "promo_code_id"
    t.bigint "reservation_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["promo_code_id"], name: "index_user_promo_codes_on_promo_code_id"
    t.index ["reservation_id"], name: "index_user_promo_codes_on_reservation_id"
    t.index ["user_id"], name: "index_user_promo_codes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "reservations", "cabins"
  add_foreign_key "reservations", "users"
  add_foreign_key "user_promo_codes", "promo_codes"
  add_foreign_key "user_promo_codes", "users"
end
