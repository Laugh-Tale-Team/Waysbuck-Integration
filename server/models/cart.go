package models

import "time"

// Product model struct
type Cart struct {
	ID        	int       			`json:"id" gorm:"primary_key:auto_increment"`
	QTY    		int    				`json:"qty" gorm:"type: int"`
	SubTotal 	int   				`json:"subtotal" gorm:"type: int"`
	ProductId	int    				`json:"product_id" gorm:"type: int"`
	Product		ProductTransaction	`json:"product"`
	ToppingId	[]int				`json:"topping_id" gorm:"-"`
	Topping		[]Topping			`json:"topping" gorm:"many2many:cart_toppings"`
	TransId    	int					`json:"trans_id" gorm:"type: int"`
	CreatedAt	time.Time 			`json:"created_at"`
	UpdatedAt	time.Time 			`json:"updated_at"`
}

type TransactionCart struct {
	ID        int                `json:"id"`
	UserID    int                `json:"user_id"`
	ProductID int                `json:"product_id"`
	ToppingID int                `json:"topping_id"`
	Product   ProductTransaction `json:"product"`
	Topping   []Topping          `json:"topping"`
}

func (TransactionCart) TableName() string {
	return "carts"
}