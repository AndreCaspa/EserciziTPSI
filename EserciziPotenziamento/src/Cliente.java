public class Cliente extends Thread {
    private Sportello sportello;
    private boolean servito;

    public Cliente(Sportello sportello){
        this.sportello = sportello;
    }

    public boolean isServito(){
        return servito;
    }

    public void run(){
        try{
            if (sportello.accedi()){
                servito = true;

                int tempo = 2000 + (int) (Math.random()*2000);
                Thread.sleep(tempo);

                sportello.libera();
            }else{
                servito = false;
            }
        }catch (InterruptedException e ){
            System.out.println(e.getMessage());
        }
    }
}
