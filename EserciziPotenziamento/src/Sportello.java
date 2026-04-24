public class Sportello {
    private int cassieri = 2;

    public synchronized boolean accedi() throws InterruptedException{
        long timeout = 5000;
        long start = System.currentTimeMillis();
        long remaining = timeout;

        while(cassieri == 0){
            if (remaining <= 0){
                return false;
            }
            wait(remaining);

            long now = System.currentTimeMillis();
            remaining = timeout - (now - start);
        }
        cassieri--;
        return true;
    }

    public synchronized void libera(){
        cassieri++;
        notifyAll();
    }

}
