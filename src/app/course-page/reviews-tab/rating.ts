export interface Rating{
    name: string; 
    numRating: number; 
    textRating: string; 
}

export const RATINGS: Rating[] = [
    {
        name: "John Doe",
        numRating: 3,
        textRating: "This course was extremely good and enjoyable"
    },
    {
        name: "Johnny Depp",
        numRating: 4.5,
        textRating: "I loved this course. It gave in-depth explanations which helped me gain strong foundations. Now I have gained a job because of what I have learnt in this course. Thank you Caramel Academy!",
    },
    {
        name: "Tina Mina",
        numRating: 4,
        textRating: "Would definitely take this course again"
    },
    {
        name: "Reena Shah",
        numRating: 5,
        textRating: "Give this class a shot. The presentations are well structured and the instructor is helpful!"
    },
    

]