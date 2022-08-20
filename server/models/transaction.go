package models

import "time"

// Product model struct
type Transaction struct {
	ID        	int					`json:"id"`
	UserId    	int					`json:"user_id" gorm:"type: int"`
	User		UserProfileResponse	`json:"user"`
	Status		string				`json:"status"`
	Total    	int					`json:"total" gorm:"type: int"`
	CreatedAt 	time.Time			`json:"-"`
	UpdatedAt 	time.Time 			`json:"-"`
}
