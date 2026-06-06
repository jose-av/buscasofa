Feature: Pie de página (Footer)

  Scenario: Comprobar que los nombres del equipo de desarrollo aparecen en el footer
    Given el usuario navega a "/"
    Then el footer debe existir en la página
    And el footer debe contener el nombre "Nahir Carolina Torres"
    And el footer debe contener el nombre "Jose Antonio Verrire Maza"
    And el footer debe contener el nombre "Victor Hugo Ponce"