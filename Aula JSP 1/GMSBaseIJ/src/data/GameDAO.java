/*
 * GameDAO
 */
package data;

import business.Game;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


/**
 *
 * @author ruicouto, jfc
 */
public class GameDAO {
    /**
     * Data is currently mocked
     */
    public static List<Game> list() {
        List<Game> r = new ArrayList<>();
        r.add(new Game(1, "Tetris", 1989, "PC"));
        r.add(new Game(2, "GTA V", 2013, "PC"));
        r.add(new Game(3, "Assetto Corsa", 2014, "XBox"));
        r.add(new Game(4, "Fallout 4", 2014, "XBox"));
        r.add(new Game(5, "Breath of The Wild", 2017, "Wii"));
        return r;
    }

    public static List<Integer> getYears() {
        return GameDAO.list().stream().mapToInt(Game::getYear).boxed().collect(Collectors.toList());
    }

    public static List<String> getPlatforms() {
        return GameDAO.list().stream().map(Game::getPlatform).collect(Collectors.toList());
    }

}
