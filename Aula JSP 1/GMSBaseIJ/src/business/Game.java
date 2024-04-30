/*
 * Game
 */
package business;

/**
 *
 * @author ruicouto, jfc
 */
public class Game {
    private int id;
    private String name;
    private int year;
    private String platform;

    public Game() {
    }

    public Game(int id, String name, int year, String platform) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.platform = platform;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

    public String getPlatform() {
        return platform;
    }

    public void setPlatform(String platform) {
        this.platform = platform;
    }

    public String toString() {
        return "id: "+id+"name: "+name;
    }


}
