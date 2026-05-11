public class Main {

    /*
    ====================================
    HÀM HIỂN THỊ
    ====================================
    */
    static void showInfo(
            String name,
            int age,
            double money
    ){

        System.out.println(name);
        System.out.println(age);
        System.out.println(money);

        System.out.println("------------");
    }

    /*
    ====================================
    HÀM TIÊU TIỀN
    ====================================
    */
    static double spendMoney(
            double money,
            double spend
    ){

        money = money - spend;

        return money;
    }

    public static void main(String[] args) {

        /*
        ====================================
        BỐ
        ====================================
        */
        String fatherName = "Bố";
        int fatherAge = 50;
        double fatherMoney = 1000;

        /*
        ====================================
        MẸ
        ====================================
        */
        String motherName = "Mẹ";
        int motherAge = 48;
        double motherMoney = 800;

        /*
        ====================================
        CON
        ====================================
        */
        String childName = "Con";
        int childAge = 20;
        double childMoney = 200;

        /*
        ====================================
        HIỂN THỊ
        ====================================
        */
        showInfo(
                fatherName,
                fatherAge,
                fatherMoney
        );

        /*
        ====================================
        BỐ TIÊU TIỀN
        ====================================
        */
        fatherMoney =
                spendMoney(
                        fatherMoney,
                        100
                );

        /*
        ====================================
        HIỂN THỊ LẠI
        ====================================
        */
        showInfo(
                fatherName,
                fatherAge,
                fatherMoney
        );
    }
}