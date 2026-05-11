/*
====================================
CLASS PERSON
====================================
*/
class Person {

    /*
     * dữ liệu nằm TRONG object
     */
    String name;
    int age;
    double money;

    /*
     * constructor
     */
    Person(
            String name,
            int age,
            double money) {

        this.name = name;
        this.age = age;
        this.money = money;
    }

    /*
     * object tự hiển thị chính nó
     */
    void showInfo() {

        System.out.println(name);
        System.out.println(age);
        System.out.println(money);

        System.out.println("------------");
    }

    /*
     * object tự sửa tiền của nó
     */
    void spendMoney(double spend) {

        money = money - spend;
    }
}

public class Main {

    public static void main(String[] args) {

        /*
         * object bố
         */
        Person father = new Person(
                "Bố",
                50,
                1000);

        /*
         * object mẹ
         */
        Person mother = new Person(
                "Mẹ",
                48,
                800);

        /*
         * object con
         */
        Person child = new Person(
                "Con",
                20,
                200);

        /*
         * object tự hiển thị
         */
        father.showInfo();

        /*
         * object tự sửa dữ liệu
         */
        father.spendMoney(100);

        father.showInfo();
    }
}