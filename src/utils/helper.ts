// Debounce function to control the execution frequency of the given function.
export const debounce = <T extends (...args: any[]) => void>(
  mainFunction: T,
  delay: number,
) => {
  // Declare a variable called 'timer' to store the timer ID
  let timer: NodeJS.Timeout;

  // Return an anonymous function that takes in any number of arguments
  return function (...args: Parameters<T>) {
    // Clear the previous timer to prevent the execution of 'mainFunction'
    clearTimeout(timer);

    // Set a new timer that will execute 'mainFunction' after the specified delay
    timer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};
