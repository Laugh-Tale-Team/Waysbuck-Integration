package models

import "time"

// Product model struct
type CartTopping struct {
	ID        int			`json:"id"`
	CartId    int			`json:"cartId" gorm:"type: int"`
	ToppingId int			`json:"toppingId" gorm:"type: int"`
	CreatedAt time.Time		`json:"created_at"`
	UpdatedAt time.Time 	`json:"updated_at"`
}
