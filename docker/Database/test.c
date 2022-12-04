#include <stdio.h>
/*
numbers = [5,8,2,7,13,21]
*/

//do you see me ?

int checkPrimeNumber(int number){
  int check = 1;
  for(int i = 2; i < number / 2 ; i++){
    if (number % i == 0){
      check = 0;
    }
  }
  return check;
}

void cal(int *number, int size){
  for(int i = 0 ; i < size ; i++){
    if(number[i] % 2 == 0){
      printf("%d is a event number! ",number[i]);
    }
    if(number[i] % 2 == 1){
      printf("%d is a odd number! ",number[i]);
    }
    if (checkPrimeNumber(number[i])){
      printf("and is a prime number!\n");
    }else{
      printf("\n");
    }
  }
}

int main(void) {
  int number[] = {5,8,2,7,13,21};
  cal(number, 6);
  printf("%d",2%2);
  return 0;
}
