/**
 * # Enhanced For Loops
 * The built-in for loop block always starts at 0 and counts up by 1 each iteration. To create any other behavior
 * requires, for example, a while loop with a seperate index variable -- valid code, but doesn't reflect how most
 * real programs create that behavior.
 */
namespace loops {
    /**
     * Have the variable 'index' take on the values from the start to the
     * end number, counting by the step amount, and do the specified blocks.
     * @param start the number to start counting at
     * @param end the number to stop counting at
     * @param step the amount to change 'index' by each time the loop runs
     */
    //% block="for $index from $start to $end count by $step"
    //% handlerStatement
    //% draggableParameters
    //% index.shadow=variables_get
    //% index.defl=index
    //% start.defl=0
    //% end.defl=4
    //% step.defl=1
    export function forIndexFrom(start: number, end: number, step: number, action: (index?: number) => void): void {
        if (step >= 0) {
            for (let index = start; index <= end; index += step) {
                action(index)
            }
        } else {
            for (let index = start; index >= end; index += step) {
                action(index)
            }
        }
    }
}
