public class Main {
    public static void main(String[] args) throws InterruptedException {
        Sportello sportello = new Sportello();
        Cliente[] clienti = new Cliente[8];

        for (int i = 0; i < 8; i++) {
            clienti[i] = new Cliente(sportello);
            clienti[i].start();
        }

        int serviti = 0;
        int rinunce = 0;

        for (Cliente c : clienti) {
            c.join();
            if (c.isServito()) serviti++;
            else rinunce++;
        }

        System.out.println("Serviti: " + serviti);
        System.out.println("Rinunce: " + rinunce);
    }
}