#include <iostream>
using namespace std;

int main() {
    int var_i = -12;

    try {
        cout << "Inside try" << endl;
        
        if (var_i < 0) {
            // Ném ra ngoại lệ là một biến kiểu int (var_i = -12)
            throw var_i; 
            
            // Dòng này sẽ KHÔNG bao giờ được thực thi
            cout << "After throw" << endl;
        }
    } 
    // Khối catch này chỉ bắt các ngoại lệ kiểu char
    catch (char var_i) { 
        cout << "Exception Caught" << endl;
    }

    cout << "After catch" << endl;
    return 0;
}